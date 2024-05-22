"use server";

import { redirect } from "next/navigation";
import { v4 as uuidV4 } from "uuid";
import { saveCheetiPayment } from "../mongo/operations/cheeti-payment.operations";
import { revalidatePath } from "next/cache";

export type PaymentFormState = {
  valid: boolean;
  errors?: {
    fields: Record<string, string> | null;
    message: string | null;
  };
} | null;

export async function createCheetiPaymentAction(
  prevState: PaymentFormState,
  formData: FormData
) {
  const cheetiId = formData.get("cheetiId") as string;
  const payment = {
    cheetiId,
    paymentId: uuidV4(),
    amount: parseInt(formData.get("amount") as string, 10),
    paataAmount: parseInt(formData.get("bidAmount") as string, 10),
    paataDate: new Date(formData.get("paataDate") as string),
    yourShare: parseInt(formData.get("youPaid") as string, 10),
    isOwned: formData.get("youOwned")
      ? formData.get("youOwned") === "on"
        ? true
        : false
      : false,
    isManagerOwned: formData.get("managerOwned")
      ? formData.get("managerOwned") === "on"
        ? true
        : false
      : false,
  };
  console.log({ payment });
  try {
    await saveCheetiPayment(payment);
  } catch (err: unknown) {
    const jsonError = (err as any).toJSON();
    console.log({ jsonError });
    const fields = Object.entries(jsonError.errors).reduce(
      (prev: Record<string, string>, curr) => {
        const [key, value] = curr;
        prev[key] = (value as Error).message;
        return prev;
      },
      {}
    );
    return {
      valid: false,
      errors: {
        fields: fields,
        message: jsonError._message as string | null,
      },
    };
  }

  revalidatePath(`/cheeti-paatalu/${cheetiId}`);
  redirect(`/cheeti-paatalu/${cheetiId}`);
}

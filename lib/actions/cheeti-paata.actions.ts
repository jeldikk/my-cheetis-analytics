"use server";

import { ICheetiPaata } from "../mongo/models/cheeti-paata.model";
import { createErrorMap, validate } from "../validators";
import { v4 as uuidV4 } from "uuid";
import CheetiPaataSchema from "../validators/schemas/cheeti-paata.schema";
import {
  closeCheetiPaata,
  isCheetiPaataExists,
  saveCheetiPaata,
} from "../mongo/operations/cheeti-paata.operations";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export interface ICheetiPaataState {
  valid: boolean;
  errors?: {
    fields: Record<string, string> | null;
    message: string | null;
  };
}

export async function createCheetiPaataAction(
  prevState: ICheetiPaataState,
  formData: FormData
) {
  //   console.log("I am in createCheetiPaataAction function");
  //   console.log({ prevState, formData });
  const cheetiValue = parseInt(formData.get("cheetiValue") as string, 10);
  const cheetiTenure = parseInt(formData.get("cheetiTenure") as string, 10);
  const cheetiPaata: ICheetiPaata = {
    cheetiId: uuidV4(),
    cheetiName: formData.get("cheetiName") as string,
    managerName: formData.get("managerName") as string,
    cheetiValue,
    cheetiTenure,
    cheetiStartMonth: parseInt(formData.get("cheetiStartMonth") as string, 10),
    cheetiStartYear: parseInt(formData.get("cheetiStartYear") as string, 10),
    monthlyPremium: cheetiValue / cheetiTenure,
  };
  const result = validate(CheetiPaataSchema, cheetiPaata);

  try {
    if (result.valid) {
      if (!(await isCheetiPaataExists(cheetiPaata))) {
        await saveCheetiPaata(cheetiPaata);
      } else {
        return {
          valid: false,
          errors: {
            fields: null,
            message: "Similar Cheeti Paata already exists",
          },
        };
      }
    } else {
      return {
        valid: false,
        errors: {
          fields: createErrorMap(result.errors as any[]),
          message: "Error occurred while vaidating data",
        },
      };
    }
  } catch (err: unknown) {
    return {
      valid: false,
    };
  }

  revalidatePath("/cheeti-paatalu");
  redirect("/cheeti-paatalu");
}

export async function closeCheetiPaataAction(formData: FormData) {
  try {
    const cheetiId = formData.get("cheetiId") as string;
    await closeCheetiPaata(cheetiId);
  } catch (err) {
    console.error({ err });
  }
}

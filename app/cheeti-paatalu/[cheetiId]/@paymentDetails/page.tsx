import { getCheetiPaymentsById } from "@/lib/mongo/operations/cheeti-payment.operations";
import PaymentList from "./_components/payment-list";
import { getCheetiPaataById } from "@/lib/mongo/operations/cheeti-paata.operations";
import { calculatePayments } from "@/lib/utils";
import { Alert } from "flowbite-react";

type Props = {
  params: {
    cheetiId: string;
  };
};

export default async function PaymentDetailsPage({ params }: Props) {
  console.log({ params });
  const cheeti = await getCheetiPaataById(params.cheetiId);
  const paymentList = await getCheetiPaymentsById(params.cheetiId);
  const totals = calculatePayments(paymentList);
  return (
    <div className="payment-details h-full flex flex-col">
      <h1 className="p-4 text-2xl font-bold text-center">Payment Details</h1>
      <PaymentList payments={paymentList} cheeti={cheeti} />
      <div className="payment-calculations p-2 font-bold text-center flex gap-2">
        <Alert color="failure" withBorderAccent className="flex-grow">
          <div className="block text-xs font-light">You Paid Total</div>
          <span className="text-xl">{totals.paidTotal}</span>
        </Alert>
        <Alert color="info" withBorderAccent className="flex-grow">
          <div className="block text-xs font-light">Waived Total</div>
          <span className="text-xl">{totals.waivedTotal}</span>
        </Alert>
      </div>
    </div>
  );
}

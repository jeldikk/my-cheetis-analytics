import { getCheetiPaataById } from "@/lib/mongo/operations/cheeti-paata.operations";
import { getCheetiPaymentsById } from "@/lib/mongo/operations/cheeti-payment.operations";
import CheetiMetadata from "./_components/cheeti-metadata";
import CheetiDetailsBanner from "./_components/cheeti-details";
import PaymentDetailsBanner from "./_components/payment-details";

type Props = {
  params: {
    cheetiId: string;
  };
};

export default async function PaataDetails(props: Props) {
  const cheeti = await getCheetiPaataById(props.params.cheetiId);
  const payments = await getCheetiPaymentsById(props.params.cheetiId);

  return (
    <div className="paata-details h-full">
      <CheetiMetadata cheeti={cheeti} />
      <CheetiDetailsBanner cheeti={cheeti} />
      <PaymentDetailsBanner cheeti={cheeti} payments={payments} />
    </div>
  );
}

import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";
import { Badge } from "flowbite-react";

type Props = {
  payment: ICheetiPayment;
};

export default function PaataDate(props: Props) {
  return <div className="paata-date"></div>;
}

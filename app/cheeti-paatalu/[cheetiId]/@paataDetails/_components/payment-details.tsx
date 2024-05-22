import { Badge, BadgeProps, FlowbiteColors } from "flowbite-react";
import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";

type Props = {
  cheeti: ICheetiPaata;
  payments: ICheetiPayment[];
};

export default function PaymentDetailsBanner(props: Props) {
  const { cheeti, payments } = props;
  return (
    <div className="payment-details flex justify-around gap-2 px-6 pt-6">
      {Array.from(Array(cheeti.cheetiTenure).keys()).map((idx) => {
        let color: BadgeProps["color"] = "info";
        let toolTipcontent;
        let payment = payments[idx];
        if (!payment) {
          color = "gray";
          toolTipcontent = "Not Yet";
        }

        if (payment?.isOwned) {
          color = "pink";
        }

        if (payment?.isManagerOwned) {
          color = "warning";
        }

        return (
          <Badge color={color} key={idx} className="border border-blue-500 p-2">
            {idx + 1}
          </Badge>
        );
      })}
    </div>
  );
}

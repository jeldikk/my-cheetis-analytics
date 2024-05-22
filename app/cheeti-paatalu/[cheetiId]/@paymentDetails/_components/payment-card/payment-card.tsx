import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";
import { Badge, Card, Tooltip } from "flowbite-react";
import IdentificationIcon from "./identification-icon";
import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import { TbSpeakerphone } from "react-icons/tb";
import { BsTrophy } from "react-icons/bs";
import PaataDate from "./paata-date";
import { MdDateRange } from "react-icons/md";

type Props = {
  payment: ICheetiPayment;
  cheeti: ICheetiPaata;
  count: number;
};

export default function (props: Props) {
  const { payment, cheeti, count } = props;
  const winningAmount =
    cheeti.cheetiValue - payment.paataAmount - payment.amount;
  return (
    <div className="cheeti-payment flex py-1 px-1 mb-1 shadow-lg border rounded-sm">
      <div className="w-1/6 text-center my-auto">
        <IdentificationIcon payment={payment} />
      </div>
      <div className="w-4/6">
        <div className="amount-paid font-bold text-lg px-5">
          {payment.amount}
        </div>
        {!payment.isManagerOwned ? (
          <div className="badges flex gap-2">
            <Badge icon={BsTrophy} color="info">
              {winningAmount}
            </Badge>
            <Badge icon={TbSpeakerphone} color="warning">
              {payment.paataAmount}
            </Badge>
            <Badge icon={MdDateRange} color="pink">
              {payment.paataDate.toDateString()}
            </Badge>
          </div>
        ) : (
          <div className="badges flex gap-2">
            <Badge icon={MdDateRange} color="pink">
              {payment.paataDate.toDateString()}
            </Badge>
          </div>
        )}
      </div>
      <div className="w-1/6">
        <Badge
          color="success"
          className="p-3 w-full h-full text-2xl text-center rounded-s-full"
        >
          {count}
        </Badge>
      </div>
    </div>
  );
}

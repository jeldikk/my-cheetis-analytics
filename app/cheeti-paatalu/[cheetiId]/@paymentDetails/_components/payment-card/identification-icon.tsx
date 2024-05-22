import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";
import { FaStar } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";

type Props = {
  payment: ICheetiPayment;
};

export default function IdentificationIcon(props: Props) {
  const { payment } = props;
  const { isManagerOwned, isOwned } = payment;
  let icon = <FaStar className="w-full h-full" />;

  if (isOwned) {
    icon = <GiDiamondTrophy className="w-full h-full" />;
  }
  if (isManagerOwned ?? false) {
    icon = <GrUserManager className="w-full h-full" />;
  }
  return (
    <div className="identification-icon h-[40px] w-[40px] p-1 mx-auto">
      {icon}
    </div>
  );
}

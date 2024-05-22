import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";
import PaymentCard from "./payment-card/payment-card";
import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";

type Props = {
  payments: ICheetiPayment[];
  cheeti: ICheetiPaata;
};
export default function PaymentList(props: Props) {
  const { payments, cheeti } = props;
  return (
    <div className="payments-list h-full px-2 overflow-y-auto">
      {payments.map((pmnt, idx) => (
        <PaymentCard
          key={pmnt.paymentId}
          payment={pmnt}
          cheeti={cheeti}
          count={idx + 1}
        />
      ))}
    </div>
  );
}

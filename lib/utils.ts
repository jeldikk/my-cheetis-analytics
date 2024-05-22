import { ICheetiPayment } from "./mongo/models/cheeti-payment.model";

export function calculatePayments(payments: ICheetiPayment[]) {
  let paidTotal = 0,
    waivedTotal = 0;

  payments.forEach((pmnt) => {
    paidTotal += pmnt.amount;
    waivedTotal += pmnt.yourShare;
  });

  return {
    paidTotal,
    waivedTotal,
  };
}

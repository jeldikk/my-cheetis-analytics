import dbConnect from "../db-connect";
import { ICheetiPaata } from "../models/cheeti-paata.model";
import { CheetiPayment, ICheetiPayment } from "../models/cheeti-payment.model";

export async function saveCheetiPayment(cheetiPayment: ICheetiPayment) {
  try {
    const instance = new CheetiPayment(cheetiPayment);
    return await instance.save();
  } catch (err) {
    throw err;
  }
}

export async function getCheetiPaymentsById(
  cheetiId: ICheetiPaata["cheetiId"]
): Promise<ICheetiPayment[]> {
  try {
    await dbConnect();
    const payments = await CheetiPayment.find({
      cheetiId,
    });
    return payments.map((p) => p.toJSON());
  } catch (err) {
    throw err;
  }
}

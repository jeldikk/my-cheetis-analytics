import { HydratedDocument } from "mongoose";
import dbConnect from "../db-connect";
import { CheetiPaata, ICheetiPaata } from "../models/cheeti-paata.model";
import { ICheetiPayment } from "../models/cheeti-payment.model";

export async function saveCheetiPaata(
  cheetiPaata: ICheetiPaata
): Promise<ICheetiPaata> {
  try {
    await dbConnect();
    const cheeti: HydratedDocument<ICheetiPaata> = new CheetiPaata(cheetiPaata);
    return await cheeti.save();
  } catch (err) {
    throw err;
  }
}

export async function getAllCheetiPaatalu(): Promise<ICheetiPaata[]> {
  try {
    await dbConnect();
    const cheetiPaatalu = await CheetiPaata.find({});
    const items = cheetiPaatalu.map<ICheetiPaata>((cp) => cp.toJSON());
    return items;
  } catch (err) {
    throw err;
  }
}

export async function getCheetiPaataById(
  cheetiId: ICheetiPaata["cheetiId"]
): Promise<ICheetiPaata> {
  try {
    await dbConnect();
    const instance = await CheetiPaata.findOne({ cheetiId });
    return instance.toJSON();
  } catch (err) {
    throw err;
  }
}

export async function isCheetiPaataExists(
  cheetiPaata: ICheetiPaata
): Promise<boolean> {
  try {
    await dbConnect();
    const findings = (await CheetiPaata.findOne<ICheetiPaata>({
      managerName: cheetiPaata.managerName,
      cheetiValue: cheetiPaata.cheetiValue,
      cheetiStartMonth: cheetiPaata.cheetiStartMonth,
      cheetiStartYear: cheetiPaata.cheetiStartYear,
      cheetiTenure: cheetiPaata.cheetiTenure,
    })) as ICheetiPaata;

    return findings ? true : false;
  } catch (err) {
    throw err;
  }
}

export async function closeCheetiPaata(cheetiId: ICheetiPaata["cheetiId"]) {
  try {
    await dbConnect();
    await CheetiPaata.updateOne({ cheetiId }, { isClosed: true });
  } catch (err) {
    throw err;
  }
}

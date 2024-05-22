import mongoose from "mongoose";
import { ICheetiPaata } from "./cheeti-paata.model";

export interface ICheetiPayment {
  cheetiId: ICheetiPaata["cheetiId"];
  paymentId: string;
  amount: number;
  paataDate: Date;
  paataAmount: number;
  yourShare: number;
  isOwned: boolean;
  isManagerOwned: boolean;
}

const cheetiPaymentSchema = new mongoose.Schema<ICheetiPayment>(
  {
    cheetiId: {
      type: String,
      required: [true, "cheeti Id is a mandatory field"],
    },
    paymentId: {
      type: String,
      required: [true, "unique Payment ID is needed"],
      unique: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount You paid is required"],
      min: [100, "Amount must be minimum 100 rupees"],
    },
    paataDate: {
      type: Date,
      required: [true, "When did paata happened is required"],
    },
    paataAmount: {
      type: Number,
      required: [true, "How much did Paata valued is required"],
    },
    yourShare: {
      type: Number,
      required: [true, "yourShare field is required"],
    },
    isOwned: {
      type: Boolean,
      default: false,
    },
    isManagerOwned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret, options) => {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
      },
    },
  }
);

cheetiPaymentSchema.virtual("mightRecieve");

export const CheetiPayment =
  (mongoose.models.CheetiPayment as mongoose.Model<ICheetiPayment>) ||
  mongoose.model<ICheetiPayment>("CheetiPayment", cheetiPaymentSchema);

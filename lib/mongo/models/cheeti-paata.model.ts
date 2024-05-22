import mongoose from "mongoose";

/**
 * Developer is responsible for ensuring that document interface lines up with your Mongoose Schema
 * Mongoose won't report an error if email is required in your Mongoose schema but optional in your document interface
 */

// Create an interface representing a document in MongoDB ( Document Interface )
export interface ICheetiPaata {
  cheetiId: string;
  cheetiName: string;
  cheetiValue: number;
  monthlyPremium: number;
  managerName: string;
  cheetiTenure: number;
  cheetiStartMonth: number;
  cheetiStartYear: number;
  isClosed?: boolean;
}

// Create a Schema corresponding to the document interface ( Schema for Doc Interface )
const cheetiPaataSchema = new mongoose.Schema<ICheetiPaata>(
  {
    cheetiId: {
      type: String,
      required: [true, "cheeti Id is mandatory"],
      unique: true,
    },
    cheetiName: {
      type: String,
      required: [true, "Cheeti Name is required"],
    },
    cheetiValue: {
      type: Number,
      required: [true, "Cheeti Value is required"],
    },
    monthlyPremium: {
      type: Number,
      required: [true, "Monthly Premium is required"],
    },
    managerName: {
      type: String,
      required: [true, "Manager Name is required"],
    },
    cheetiTenure: {
      type: Number,
      required: [true, "Cheeti Tenure is required"],
    },
    cheetiStartMonth: {
      type: Number,
      required: [true, "Cheeti Start Month is mandatory"],
    },
    cheetiStartYear: {
      type: Number,
      required: [true, "Cheeti Start Year is mandatory"],
    },
    isClosed: {
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

// Create a Model
export const CheetiPaata =
  mongoose.models.CheetiPaata ||
  mongoose.model<ICheetiPaata>("CheetiPaata", cheetiPaataSchema);

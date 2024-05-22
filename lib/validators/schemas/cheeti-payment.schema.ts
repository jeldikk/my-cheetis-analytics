import { ICheetiPayment } from "@/lib/mongo/models/cheeti-payment.model";
import { JSONSchemaType } from "ajv";

const CheetiPaymentSchema = {
  type: "object",
  properties: {
    cheetiId: {
      type: "string",
    },
    paymentId: {
      type: "string",
    },
    amount: {
      type: "integer",
    },
    paataAmount: {
      type: "integer",
    },
    paataDate: {
      type: "string",
      format: "date",
    },
    yourShare: {
      type: "integer",
    },
    isOwned: {
      type: "boolean",
    },
  },
  required: [
    "cheetiId",
    "paymentId",
    "amount",
    "paataAmount",
    "paataDate",
    "yourShare",
    "isOwned",
  ],
  additionalProperties: false,
};

export default CheetiPaymentSchema;

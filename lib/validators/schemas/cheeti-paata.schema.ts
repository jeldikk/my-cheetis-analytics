import { ICheetiPaata } from "@/lib/mongo/models/cheeti-paata.model";
import { JSONSchemaType } from "ajv";

const CheetiPaataSchema: JSONSchemaType<ICheetiPaata> = {
  type: "object",
  properties: {
    cheetiId: {
      type: "string",
    },
    cheetiName: {
      type: "string",
      maxLength: 100,
    },
    monthlyPremium: {
      type: "integer",
    },
    managerName: {
      type: "string",
      maxLength: 50,
    },
    cheetiStartMonth: {
      type: "integer",
      minimum: 1,
      maximum: 12,
    },
    cheetiStartYear: {
      type: "integer",
      minimum: 1900,
      maximum: 2200,
    },
    cheetiTenure: {
      type: "integer",
      minimum: 1,
    },
    cheetiValue: {
      type: "integer",
      minimum: 1000,
    },
    isClosed: {
      type: "boolean",
      nullable: true,
    },
  },
  required: [
    "cheetiId",
    "cheetiName",
    "monthlyPremium",
    "managerName",
    "cheetiStartMonth",
    "cheetiStartYear",
    "cheetiTenure",
    "cheetiValue",
  ],
  additionalProperties: false,
};

export default CheetiPaataSchema;

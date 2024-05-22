import Ajv, { DefinedError, JSONSchemaType, ValidateFunction } from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export interface IValidationState {
  valid: boolean;
  errors: Record<string, DefinedError>;
}

export function validate<T>(schema: JSONSchemaType<T>, data: T) {
  const validator = ajv.compile(schema);
  const valid = validator(data);
  return { valid, errors: validator.errors };
}

export function createErrorMap(errors: any[]): Record<string, string> {
  const regex = new RegExp("[a-zA-Z]+[0-9]*[a-zA-Z]*");
  const map: { [key: string]: string } = {};
  errors.forEach((err) => {
    const execution = regex.exec(err.instancePath);
    if (!!execution) {
      const varName = execution && execution[0];
      //   map.set(varName, err.message || "unknown error");
      map[varName] = err.message || "unknown error occurred";
    }
  });
  return map;
}

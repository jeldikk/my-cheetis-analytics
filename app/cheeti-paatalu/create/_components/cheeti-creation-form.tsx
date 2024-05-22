"use client";
import { Alert, Label, TextInput, Select, Button } from "flowbite-react";
import FormSubmitButton from "@/components/form-submit-button";
import { useFormState } from "react-dom";
import { HiInformationCircle } from "react-icons/hi";
import {
  createCheetiPaataAction,
  ICheetiPaataState,
} from "@/lib/actions/cheeti-paata.actions";
import { useState, useEffect } from "react";

const initialState: ICheetiPaataState = {
  valid: false,
  errors: {
    fields: null,
    message: null,
  },
};
export default function CheetiCreationForm() {
  const [state, formAction] = useFormState(
    createCheetiPaataAction,
    initialState
  );
  const [formState, setFormState] = useState(initialState);
  useEffect(() => {
    console.log("");
    setFormState(state);
  }, [state]);
  console.log({ formState });
  function resetFormState() {
    setFormState(initialState);
  }
  return (
    <div className="cheeti-paata-page px-6 py-12">
      {formState && formState.errors && formState.errors?.message && (
        <Alert color="failure" icon={HiInformationCircle}>
          {formState.errors?.message}
        </Alert>
      )}
      <h1 className="text-center text-2xl font-bold my-4">
        Create Cheeti Paata
      </h1>
      <form action={formAction} onReset={resetFormState}>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label
              htmlFor="cheeti-name"
              value="Cheeti Name"
              className="font-bold"
            ></Label>
          </div>
          <TextInput
            name="cheetiName"
            id="cheeti-name"
            type="text"
            placeholder="Enter Cheeti Name"
            required
            color={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.cheetiName
                ? "failure"
                : "gray"
            }
            helperText={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.cheetiName ? (
                <>
                  <span className="font-medium">
                    {formState.errors.fields.cheetiName}
                  </span>
                </>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label
              className="font-bold"
              htmlFor="cheeti-manager-name"
              value="Cheeti Manager Name"
            />
          </div>
          <TextInput
            name="managerName"
            id="cheeti-manager-name"
            type="text"
            placeholder="Enter Manager name"
            required
            color={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.managerName
                ? "failure"
                : "gray"
            }
            helperText={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.managerName ? (
                <>
                  <span className="font-medium">
                    {formState.errors.fields.managerName}
                  </span>
                </>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label
              className="font-bold"
              htmlFor="cheeti-value"
              value="Cheeti Value"
            ></Label>
          </div>
          <TextInput
            name="cheetiValue"
            id="cheeti-value"
            type="number"
            min="0"
            placeholder="Enter Cheeti Value"
            required
            color={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.cheetiValue
                ? "failure"
                : "gray"
            }
            helperText={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.cheetiValue ? (
                <>
                  <span className="font-medium">
                    {formState.errors.fields.cheetiValue}
                  </span>
                </>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label
              className="font-bold"
              htmlFor="cheeti-tenure"
              value="Cheeti Tenure"
            ></Label>
          </div>
          <TextInput
            name="cheetiTenure"
            id="cheeti-tenure"
            type="number"
            placeholder="Enter Cheeti Tenure"
            required
            color={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.cheetiTenure
                ? "failure"
                : "gray"
            }
            helperText={
              formState.errors &&
              formState.errors?.fields &&
              formState.errors?.fields?.cheetiTenure ? (
                <>
                  <span className="font-medium">
                    {formState.errors.fields.cheetiTenure}
                  </span>
                </>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="mb-5">
          <div className="mb-2 block">
            <Label
              className="font-bold"
              htmlFor="cheeti-start-month"
              value="Cheeti Starting From"
            ></Label>
          </div>
          <div className="flex justify-start gap-4">
            <Select id="cheeti-start-month" name="cheetiStartMonth">
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </Select>
            <TextInput
              name="cheetiStartYear"
              id="cheeti-start-year"
              type="number"
              min="1"
              placeholder="Year"
              required
              color={
                formState.errors &&
                formState.errors?.fields &&
                formState.errors?.fields?.cheetiStartYear
                  ? "failure"
                  : "gray"
              }
              helperText={
                formState.errors &&
                formState.errors?.fields &&
                formState.errors?.fields?.cheetiStartYear ? (
                  <>
                    <span className="font-medium">
                      {formState.errors.fields.cheetiStartYear}
                    </span>
                  </>
                ) : (
                  ""
                )
              }
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button type="reset" color="warning">
            Clear
          </Button>
          <FormSubmitButton label="Create Cheeti Paata" />
        </div>
      </form>
    </div>
  );
}

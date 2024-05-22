"use client";
import { ChangeEvent, useContext, useState } from "react";
import {
  TextInput,
  Label,
  Checkbox,
  Button,
  Datepicker,
  Alert,
} from "flowbite-react";
import {
  CheetiPaataDetailContext,
  ICheetiPaataDetailContext,
} from "@/context/cheeti-paata-detail.context";
import { createCheetiPaymentAction } from "@/lib/actions/cheeti-payment.actions";
import FormSubmitButton from "@/components/form-submit-button";
import { useFormState } from "react-dom";
import { PaymentFormState } from "@/lib/actions/cheeti-payment.actions";
import { HiInformationCircle } from "react-icons/hi";

const INITIAL_STATE: PaymentFormState = {
  valid: false,
  errors: {
    fields: null,
    message: null,
  },
};

export default function CheetiPaataPayment() {
  const cheetiContext = useContext<ICheetiPaataDetailContext>(
    CheetiPaataDetailContext
  ) as ICheetiPaataDetailContext;
  const [amount, setAmount] = useState<number | null>();
  const [bidAmount, setBidAmount] = useState<number | null>();
  const [youPaid, setYouPaid] = useState<number | null>();
  const [isOwned, setIsOwned] = useState<boolean>(false);
  const [managerOwned, setManagerOwned] = useState<boolean>(false);
  const [paataDate, setPaataDate] = useState<Date | null>(null);
  const [state, formAction] = useFormState(
    createCheetiPaymentAction,
    INITIAL_STATE
  );

  console.log({ state });

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    let amount = Number.isNaN(event.target.valueAsNumber)
      ? null
      : event.target.valueAsNumber;
    if (!amount) {
      setAmount(amount);
      setBidAmount(null);
      setYouPaid(null);
      return;
    }
    if (cheetiContext.cheeti) {
      const youPaid = cheetiContext.cheeti.monthlyPremium - amount;
      const bidAmount = youPaid * cheetiContext.cheeti.cheetiTenure;
      setAmount(amount);
      setBidAmount(bidAmount);
      setYouPaid(youPaid);
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const fieldName = event.target.name;
    if (fieldName === "managerOwned") {
      setManagerOwned(isChecked);
    } else if (fieldName === "youOwned") {
      setIsOwned(isChecked);
    }
  };

  const handlePaymentDateChange = (date: Date) => {
    setPaataDate(date);
  };

  return (
    <div className="cheeti-paata-payment-page px-8 py-4 h-5/6 rounded-lg shadow-xl">
      <h3 className="text-2xl text-center">Enter Cheeti Payment Details</h3>
      {state && state.errors && state.errors?.message && (
        <Alert color="failure" icon={HiInformationCircle}>
          {state.errors?.message}
        </Alert>
      )}
      <form action={formAction}>
        <input
          type="hidden"
          name="cheetiId"
          value={cheetiContext.cheeti?.cheetiId}
        />
        <div className="flex gap-4">
          <div className="basis-1/2">
            <div className="my-2">
              <Label className="font-bold" htmlFor="amount" value="Amount" />
            </div>
            <TextInput
              id="amount"
              type="number"
              required
              name="amount"
              value={amount ?? ""}
              placeholder="Enter paata Amount"
              onChange={handleAmountChange}
            />
          </div>
          <div className="basis-1/2">
            <div className="my-2">
              <Label
                className="font-bold"
                htmlFor="paata-date"
                value="Paata Date"
              />
            </div>
            <Datepicker
              id="paata-date"
              placeholder="Select Payment Date"
              name="paataDate"
              required
              defaultDate={new Date()}
              onSelectedDateChanged={handlePaymentDateChange}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="basis-1/3">
            <div className="my-2">
              <Label
                className="font-bold"
                htmlFor="bid-amount"
                value="Bidded Amount"
              />
            </div>
            <TextInput
              id="bid-amount"
              type="number"
              required
              name="bidAmount"
              placeholder="Bidded Amount will appear here"
              value={bidAmount ?? ""}
              readOnly
            />
          </div>
          <div className="basis-1/3">
            <div className="my-2">
              <Label
                className="font-bold"
                htmlFor="you-paid"
                value="You Paid"
              />
            </div>
            <TextInput
              id="you-paid"
              type="number"
              required
              placeholder="Your share for the bid"
              name="youPaid"
              value={youPaid ?? ""}
              readOnly
            />
          </div>
        </div>

        <div className="flex gap-4 my-4">
          {!cheetiContext.isCheetiOwned ? (
            <div className="flex is-owned">
              <Checkbox
                className="mt-1"
                id="you-owned"
                name="youOwned"
                checked={isOwned}
                onChange={handleCheckboxChange}
              />
              <div className="mx-2">
                <Label htmlFor="you-owned" value="You Owned" />
              </div>
            </div>
          ) : null}
          {!cheetiContext.isManagerOwned ? (
            <div className="flex manager-owned">
              <Checkbox
                className="mt-1"
                id="manager-owned"
                name="managerOwned"
                checked={managerOwned}
                onChange={handleCheckboxChange}
              />
              <div className="mx-2">
                <Label htmlFor="you-owned" value="Manager Cheeti" />
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex">
          <Button type="reset" color="warn">
            Reset
          </Button>
          <FormSubmitButton label="Create Payment" />
        </div>
      </form>
    </div>
  );
}

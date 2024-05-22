"use client";
import { Button, ButtonProps } from "flowbite-react";
import { useFormStatus } from "react-dom";

type Props = {
  label?: string;
  size?: ButtonProps["size"];
  pill?: ButtonProps["pill"];
  color?: ButtonProps["color"];
};

export default function FormSubmitButton(props: Props) {
  const label = props.label || "Submit";
  const size = props.size || "md";
  const pill = props.pill || false;
  const color = props.color;
  const { pending } = useFormStatus();
  return (
    <Button
      pill={pill}
      size={size}
      color={color}
      type="submit"
      disabled={pending}
      isProcessing={pending}
    >
      {label}
    </Button>
  );
}

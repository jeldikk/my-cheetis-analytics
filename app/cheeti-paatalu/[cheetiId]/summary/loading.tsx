import { Spinner } from "flowbite-react";

export default function CheetiPaataSummaryLoader() {
  return (
    <div className="grid place-content-center h-full text-center bg-slate-100 p-4">
      <Spinner aria-label="Loading cheeti paatalu" size="xl" />
      <span className="mx-2 my-2 text-xl">
        Please Wait, while we Load your Cheeti Summary Details
      </span>
    </div>
  );
}

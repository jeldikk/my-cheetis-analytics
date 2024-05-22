import { Spinner } from "flowbite-react";

export default function CheetiPaataAnalysisLoader() {
  return (
    <div className="grid place-content-center h-full text-center bg-slate-100 p-4">
      <Spinner aria-label="Loading cheeti paatalu" size="xl" />
      <span className="mx-2 my-2 text-2xl">
        Please Wait, while we Load your cheeti Analytics
      </span>
    </div>
  );
}

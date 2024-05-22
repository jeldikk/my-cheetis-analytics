import { Spinner } from "flowbite-react";

export default function CheetiPaataluPageLoader() {
  return (
    <div className="grid place-content-center min-h-screen text-center bg-slate-100 p-4">
      <Spinner aria-label="Loading cheeti paatalu" size="xl" />
      <span className="mx-2 my-2 text-2xl">
        Loading your cheeti paata list, Please Wait
      </span>
    </div>
  );
}

import { Suspense } from "react";
import CheetiCreationForm from "./_components/cheeti-creation-form";

export default function CreateCheetiPaata() {
  return (
    <div className="create-cheeti-paata min-h-screen pt-24">
      <div className="w-1/3 mx-auto shadow-2xl shadow-blue-400 border rounded-md">
        <Suspense>
          <CheetiCreationForm />
        </Suspense>
      </div>
    </div>
  );
}

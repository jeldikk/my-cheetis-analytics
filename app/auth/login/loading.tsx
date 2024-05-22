import { Spinner } from "flowbite-react";

export default function LoginLoadingPage() {
  return (
    <div className="grid place-content-center h-screen text-center bg-slate-100 p-4">
      <Spinner aria-label="Loading Login Form" size="xl" />
      <span className="mx-2 my-2 text-2xl">Loading Login Page</span>
    </div>
  );
}

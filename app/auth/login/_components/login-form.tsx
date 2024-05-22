"use client";
// import FormSubmitButton from "@/components/form-submit-button";
import { Label, TextInput, Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLogging, setIsLogging] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log("before submitting the form");
    console.log({ username, password });
    setIsLogging(true);
    const result = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/cheeti-paatalu",
      username,
      password,
    });

    console.log("after submitting the form");
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };
  return (
    <div className="login-form w-[400px] rounded-lg shadow-lg py-6 px-4">
      <h1 className="text-2xl text-center font-bold my-4">
        Login for Awesomeness
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="my-2">
            <Label className="font-bold" htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            required
            name="username"
            value={username ?? ""}
            placeholder="Enter Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <div className="my-2">
            <Label className="font-bold" htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            name="password"
            value={password ?? ""}
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="login-controls mt-3">
          <Button type="submit" isProcessing={isLogging}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

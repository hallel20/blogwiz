"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/reusable/Button";
import Spinner from "@/components/reusable/Spinner";
import { handleSignIn } from "@/lib/actions";
import { useState } from "react";
import { signIn, SignInResponse } from "next-auth/react";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { handleSubmit, register, reset } = useForm<LoginForm>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  return (
    <>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            setLoading(true);
            (await signIn("credentials", {
              email: data.email,
              password: data.password,
              redirect: false,
            })) as SignInResponse;
            setLoading(false);
            reset();
            router.replace("/");
          } catch (ex) {
            setLoading(false);
            console.log(ex);
            setError("Something went wrong, please try again!");
          }
        })}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          Log In {loading && <Spinner />}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;

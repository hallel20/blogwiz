"use client";
import Button from "@/components/reusable/Button";
import Spinner from "@/components/reusable/Spinner";
import { signUp } from "@/lib/actions";
import { SignUpForm } from "@/lib/formTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register } = useForm<SignUpForm>();

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              setLoading(true);
              await signUp(data);
              setLoading(false);
              router.replace("/auth/login");
            } catch (ex) {
              setLoading(false);
              setError("Something went wrong, please try again!");
            }
          })}
          className="space-y-3"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              {...register("firstname")}
              id="firstname"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              {...register("lastname")}
              id="lastname"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              {...register("username")}
              id="username"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
              {...register("password")}
              id="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              id="confirmPassword"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled={loading}"
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            Sign Up {loading && <Spinner />}
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

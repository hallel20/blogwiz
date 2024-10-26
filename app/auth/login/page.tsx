"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import Button from "@/components/reusable/Button";
import Spinner from "@/components/reusable/Spinner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth";
import { handleSignIn } from "@/lib/actions";

interface LoginForm {
  email: string;
  password: string;
}

export default async function Login() {
  const { handleSubmit, register } = useForm<LoginForm>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const session = await getServerSession(authOptions);

  // If the user is already logged in, redirect them to the dashboard
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Log In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              setLoading(true);
              await handleSignIn(data);
              setLoading(false);
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
          <Button type="submit" className="w-full">
            Log In {loading && <Spinner />}
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? {"  "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

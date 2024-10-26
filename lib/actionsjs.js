"use server";
import bcrypt from "bcrypt";
import prisma from "@/prisma/db";
import { signIn } from "next-auth/react";

export const createUser = async (formData) => {
  const { username, email, firstname, lastname, confirm_password, role } =
    Object.fromEntries(formData);
  const entered_password = formData.get("password");

  try {
    if (entered_password != confirm_password)
      throw new Error("Password not match!");
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(entered_password, salt);
    await prisma.user.create({
      data: { username, firstname, email, lastname, password, role },
    });
  } catch (ex) {
    console.log(ex);
    throw new Error("Could not create user!");
  }
};

export const signUp = async (data) => {
  const { username, firstname, lastname, email, password, confirmPassword } =
    data;

  try {
    if (password != confirmPassword) throw new Error("Password not match!");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        username,
        firstname,
        lastname,
        email,
        password: hashedPassword,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong, please try again!");
  }
};

export const authenticate = async (data) => {
  const { username, password } = data;

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

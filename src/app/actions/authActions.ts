"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/lib/schemas/LoginSchema";
import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

export async function signInUser(
  data: LoginSchema
): Promise<ActionResult<string>> {
  try {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(result);
    return { status: "success", data: "Logged in" };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { status: "error", error: "Invalid credentials." };
          break;
        default:
          return {
            status: "error",
            error: "Something went wrong with Authentication. ",
          };
      }
    } else {
      return {
        status: "error",
        error: "Something went wrong while logging in.",
      };
    }
  }
}

export async function registerUser(
  data: RegisterSchema
): Promise<ActionResult<User>> {
  try {
    /*validating the user submitted data with the zod schema  */
    const validated = registerSchema.safeParse(data);
    if (!validated.success) {
      return { status: "error", error: validated.error.errors };
    }
    const { name, email, password } = validated.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return {
        status: "error",
        error:
          "There is an already existing account with this email address, please try another email.",
      };
    }
    const user = await prisma.user.create({
      data: { name, email, passwordHash: hashedPassword },
    });
    return { status: "success", data: user };
  } catch (error) {
    return { status: "error", error: "Something went wrong" };
  }
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}
export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

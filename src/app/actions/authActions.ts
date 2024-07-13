"use server";

import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
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
        error: "There is already an account exist with this email address.",
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

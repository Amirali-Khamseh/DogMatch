import { z } from "zod";
import { calculateAge } from "../util";
/*Zod schema */
export const registerSchema = z.object({
  name: z.string().min(3, { message: "Name must be minimum 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be minimum 6 characters" }),
});
export const profileSchema = z.object({
  gender: z.string().min(1),
  description: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
  dateOFBirth: z.string().min(1, {
    message: "Date of birth is required",
  }),
});
/*TS type */
export const combinedRegisterSchema = registerSchema.and(profileSchema);

export type ProfileSchema = z.infer<typeof profileSchema>;

export type RegisterSchema = z.infer<
  typeof registerSchema & typeof profileSchema
>;

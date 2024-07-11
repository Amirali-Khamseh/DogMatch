import { z } from "zod";
/*Zod schema */
export const registerSchema = z.object({
  name: z.string().min(3, { message: "Name must be minimum 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be minimum 6 characters" }),
});
/*TS type */
export type RegisterSchema = z.infer<typeof registerSchema>;

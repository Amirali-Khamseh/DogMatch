import { z } from "zod";
/*Zod schema */
export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be minimum 6 characters" }),
});
/*TS type */
export type LoginSchema = z.infer<typeof loginSchema>;

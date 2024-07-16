import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { loginSchema } from "./lib/schemas/LoginSchema";
import { getUserByEmail } from "./app/actions/authActions";
import { compare } from "bcryptjs";

export default {
  providers: [
    credentials({
      name: "credentials",
      async authorize(creds) {
        const validate = loginSchema.safeParse(creds);
        if (validate.success) {
          const { email, password } = validate.data;
          const user = await getUserByEmail(email);
          if (!user || !(await compare(password, user.passwordHash))) {
            return null;
          }
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

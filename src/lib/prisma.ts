import { PrismaClient } from "@prisma/client";
/*To prevent hot module reloading and creating a different instances of prisma  */
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma || new PrismaClient({ log: ["query"] });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

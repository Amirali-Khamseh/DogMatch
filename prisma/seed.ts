import { PrismaClient } from "@prisma/client";
import { membersData } from "./membersData";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function seedMembers() {
  return Promise.all(
    membersData.map(async (member) => {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: member.email },
      });

      if (existingUser) {
        console.log(
          `User with email ${member.email} already exists, skipping...`
        );
        return null;
      }

      return prisma.user.create({
        data: {
          email: member.email,
          emailVerified: new Date(),
          name: member.name,
          passwordHash: await hash("password", 10),
          image: member.image,
          profileComplete: true,
          member: {
            create: {
              dateOFBirth: new Date(member.dateOfBirth),
              gender: member.gender,
              name: member.name,
              createdAt: new Date(member.created),
              updatedAt: new Date(member.lastActive),
              description: member.description,
              city: member.city,
              country: member.country,
              image: member.image,
              photos: {
                create: {
                  url: member.image,
                  isApproved: true,
                },
              },
            },
          },
        },
      });
    })
  );
}

async function seedAdmin() {
  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "amiralikhamseh01@gmail.com" },
  });

  if (existingAdmin) {
    console.log("Admin user already exists, skipping...");
    return null;
  }

  return prisma.user.create({
    data: {
      email: "amiralikhamseh01@gmail.com",
      emailVerified: new Date(),
      name: "Admin",
      passwordHash: await hash("AdminDogMatchPass", 10),
      role: "ADMIN",
    },
  });
}

async function main() {
  console.log("Starting database seed...");
  const members = await seedMembers();
  console.log(`Seeded ${members.filter((m) => m !== null).length} members`);

  const admin = await seedAdmin();
  if (admin) {
    console.log("Admin user created successfully");
  }

  console.log("Database seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

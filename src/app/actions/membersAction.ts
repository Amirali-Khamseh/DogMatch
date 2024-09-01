"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { GetMemberParams, PaginatedResponse, UserFilters } from "@/types";
import { Member, Photo } from "@prisma/client";
import { addYears } from "date-fns";
import { getAuthUserId } from "./authActions";
import { Members } from "pusher-js";

export async function getMembers({
  ageRange = "1,50",
  gender = "male,female",
  pageNumber = "1",
  pageSize = "12",
}: GetMemberParams): Promise<PaginatedResponse<Member>> {
  const userId = await getAuthUserId();

  const [minAge, maxAge] = ageRange.split(",");
  const currentDate = new Date();
  const minDob = addYears(currentDate, -maxAge - 1);
  const maxDob = addYears(currentDate, -minAge);
  const selectedGender = gender.split(",");

  const page = parseInt(pageNumber);
  const limit = parseInt(pageSize);

  const skip = (page - 1) * limit;

  try {
    const count = await prisma.member.count({
      where: {
        AND: [
          { dateOFBirth: { gte: minDob } },
          { dateOFBirth: { lte: maxDob } },
          { gender: { in: selectedGender } },
        ],
        NOT: {
          userId,
        },
      },
    });

    const members = await prisma.member.findMany({
      where: {
        AND: [
          { dateOFBirth: { gte: minDob } },
          { dateOFBirth: { lte: maxDob } },
          { gender: { in: selectedGender } },
        ],
        NOT: {
          userId,
        },
      },
      skip,
      take: limit,
    });

    return {
      items: members,
      totalCount: count,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMemberByUserId(userId: string) {
  try {
    return prisma.member.findUnique({ where: { userId } });
  } catch (error) {
    console.log(error);
  }
}

export async function getMemberPhotosByUserId(userId: string) {
  const currentUserId = await getAuthUserId();
  const member = await prisma.member.findUnique({
    where: { userId },
    select: {
      photos: {
        where: currentUserId === userId ? {} : { isApproved: true },
      },
    },
  });

  if (!member) return null;

  return member.photos as Photo[];
}

export async function updateLastActive() {
  const userId = await getAuthUserId();

  try {
    return prisma.member.update({
      where: { userId },
      data: { updatedAt: new Date() },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

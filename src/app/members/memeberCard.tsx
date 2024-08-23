"use client";
import LikeButton from "@/componenets/LikeButton";
import PresenceDot from "@/componenets/PresenceDot";
import { calculateAge, transformImageUrl } from "@/lib/util";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  key: string;
  member: Member;
  likeIds: string[];
}
export default function MemberCard({ member, likeIds }: Props) {
  const hasLiked = likeIds.includes(member.userId);
  /*Preventing the click on like button to redirect to the details page and only work on the like button */
  const preventLinkAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Card as={Link} href={`/members/${member.userId}`} isPressable>
      <Image
        isZoomed
        alt={member.name}
        width={300}
        src={transformImageUrl(member.image) || ""}
      />
      <div onClick={preventLinkAction}>
        <div className="absolute top-3 right-3 z-10">
          <LikeButton targetId={member.userId} hasLiked={hasLiked} />
        </div>
      </div>
      <CardFooter className="flex justify-start bg-dark-gradient overflow-hidden absolute bottom-0 z-10">
        <div className="flex flex-col text-white">
          <div>
            <span className="font-semibold mr-2">{member.name}</span>
            <span className="font-bold">
              {calculateAge(member.dateOFBirth)}
            </span>
          </div>
          <span className="text-sm">
            {member.city}
            <PresenceDot member={member} />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

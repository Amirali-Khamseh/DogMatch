import { calculateAge } from "@/lib/util";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import React from "react";
interface Props {
  key: string;
  member: Member;
}
export default function MemberCard({ member }: Props) {
  return (
    <Card as={Link} href={`/members/${member.userId}`} isPressable>
      <Image isZoomed alt={member.name} width={300} src={member.image || ""} />
      <CardFooter className="flex justify-start bg-dark-gradient overflow-hidden absolute bottom-0 z-10">
        <div className="flex flex-col text-white">
          <div>
            <span className="font-semibold mr-2">{member.name}</span>
            <span className="font-bold">
              {calculateAge(member.dateOFBirth)}
            </span>
          </div>
          <span className="text-sm">{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

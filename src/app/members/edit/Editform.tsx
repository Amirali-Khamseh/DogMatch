import { Member } from "@prisma/client";
import React from "react";
interface Props {
  member: Member;
}
export default function Editform({ member }: Props) {
  return <div>{member.name}</div>;
}

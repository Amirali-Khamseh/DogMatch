import { Member } from "@prisma/client";
import React from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import usePresenceStore from "../../hooks/usePresenceStore";

type Props = {
  member: Member;
};

export default function PresenceDot({ member }: Props) {
  const { members } = usePresenceStore((state) => ({
    members: state.members,
  }));

  const isOnline = members.indexOf(member.userId) !== -1;

  if (!isOnline) return null;

  return (
    <GoDotFill
      size={32}
      style={{
        color: "#00ff09",
        border: "6px solid white",
        borderRadius: "50%",
      }}
    />
  );
}

import React from "react";
import { getMembers } from "../actions/membersAction";
import MemberCard from "./memeberCard";

export default async function page() {
  const members = await getMembers();
  return (
    <div className=" flex justify-center align-middle flex-wrap p-4 gap-4">
      {members &&
        members?.map((member) => {
          return <MemberCard key={member.id} member={member} />;
        })}
    </div>
  );
}

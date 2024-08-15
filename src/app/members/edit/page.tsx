import { CardHeader, Divider, CardBody } from "@nextui-org/react";
import React from "react";
import Editform from "./Editform";
import { getAuthUserId } from "@/app/actions/authActions";
import { getMemberByUserId } from "@/app/actions/membersAction";
import { notFound } from "next/navigation";

export default async function page() {
  const userId = await getAuthUserId();

  const member = await getMemberByUserId(userId);

  if (!member) return notFound();
  return (
    <>
      <CardHeader className="text-xl font-semibold">Edit Profile</CardHeader>
      <Divider />
      <CardBody>
        <Editform member={member} />
      </CardBody>
    </>
  );
}

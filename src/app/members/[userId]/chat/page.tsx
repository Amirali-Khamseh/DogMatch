import { notFound } from "next/navigation";
import { getMemberByUserId } from "@/app/actions/membersAction";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function MemberDetailsPage() {
  return (
    <>
      <CardHeader className="text-xl font-semibold">Chat</CardHeader>
      <Divider />
      <CardBody>Chat goes here </CardBody>
    </>
  );
}

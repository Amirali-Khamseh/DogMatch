import { notFound } from "next/navigation";
import { getMemberByUserId } from "@/app/actions/membersAction";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function MemberDetailsPage({
  params,
}: {
  params: { userId: string };
}) {
  const member = await getMemberByUserId(params.userId);
  if (!member) return notFound();
  return (
    <>
      <CardHeader className="text-xl font-semibold">Profile</CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </>
  );
}

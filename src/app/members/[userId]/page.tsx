import { notFound } from "next/navigation";
import { getMemberByUserId } from "@/app/actions/membersAction";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function MemberDetailsPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const member = await getMemberByUserId(userId);
  if (!member) return notFound();
  return (
    <>
      <CardHeader className="text-lg md:text-xl font-semibold">
        Profile
      </CardHeader>
      <Divider />
      <CardBody className="p-4 text-sm md:text-base">
        {member.description}
      </CardBody>
    </>
  );
}

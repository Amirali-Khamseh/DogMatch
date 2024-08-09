import { getMemberByUserId } from "@/app/actions/membersAction";
import { ReactNode } from "react";
import MemberSidebar from "../MemberSidebar";
import { notFound } from "next/navigation";
import { Card } from "@nextui-org/react";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { userId: string };
}) {
  const member = await getMemberByUserId(params.userId);
  if (!member) return notFound();
  return (
    <div className="grid grid-cols-12 gap-5  px-[10%]">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-8 flex flex-col">
        <div className="flex-grow mt-10">
          <Card className="w-full h-full">{children}</Card>
        </div>
      </div>
    </div>
  );
}

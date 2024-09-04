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
  const basePath = `/members/${member?.userId}`;

  const navLinks = [
    { name: "Profile", href: `${basePath}` },
    { name: "Photos", href: `${basePath}/photos` },
    { name: "Chat", href: `${basePath}/chat` },
  ];
  if (!member) return notFound();
  return (
    <div className="flex  flex-col gap-5 md:flex-row justify-center items-center  h-[580px]">
      <div className="col-span-3 h-full">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>
      <div className=" flex flex-col h-full">
        <div className="flex-grow mt-10">
          <Card className="w-full h-full">{children}</Card>
        </div>
      </div>
    </div>
  );
}

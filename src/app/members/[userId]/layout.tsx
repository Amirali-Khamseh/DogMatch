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
    <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-start ">
      {/* Sidebar for medium and larger screens */}
      <div className="w-full md:w-1/3 lg:w-1/4 h-full md:sticky md:top-0">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>

      {/* Content Area */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col h-max-full  overflow-hidden px-4 md:px-8">
        <div className="flex-grow mt-5 md:mt-10 h-full">
          <Card className="w-full h-full">{children}</Card>
        </div>
      </div>
    </div>
  );
}

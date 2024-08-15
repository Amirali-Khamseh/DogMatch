import { ReactNode } from "react";
import MemberSidebar from "../MemberSidebar";
import { notFound } from "next/navigation";
import { Card } from "@nextui-org/react";
import { getMemberByUserId } from "@/app/actions/membersAction";
import { getAuthUserId } from "@/app/actions/authActions";

export default async function Layout({ children }: { children: ReactNode }) {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const basePath = `/members/edit`;
  const navLinks = [
    { name: "Edit Profile", href: `${basePath}` },
    { name: "Update Photos", href: `${basePath}/photos` },
  ];
  if (!member) return notFound();
  return (
    <div className="grid grid-cols-12 gap-5  px-[10%]">
      <div className="col-span-3">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>
      <div className="col-span-8 flex flex-col">
        <div className="flex-grow mt-10">
          <Card className="w-full h-full">{children}</Card>
        </div>
      </div>
    </div>
  );
}

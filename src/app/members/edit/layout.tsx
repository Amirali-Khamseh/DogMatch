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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:px-[5%] lg:px-[10%]">
      {/* Sidebar: Stacked on small screens, occupies 3/12 on medium and larger screens */}
      <div className="col-span-1 md:col-span-3">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>

      {/* Content Area: Full width on small screens, 8/12 on medium and larger */}
      <div className="col-span-1 md:col-span-9 flex flex-col">
        <div className="flex-grow mt-5 md:mt-10">
          <Card className="w-full h-full">{children}</Card>
        </div>
      </div>
    </div>
  );
}

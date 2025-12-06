import React from "react";
import { auth } from "@/auth";
import { getUserInfoForNav } from "@/app/actions/useActions";
import NavClient from "./NavClient";

export default async function Nav() {
  const session = await auth();
  const userInfo = session?.user ? await getUserInfoForNav() : null;

  const memberLinks = [
    { href: "/members", label: "Matches" },
    { href: "/lists", label: "Lists" },
    { href: "/messages", label: "Messages" },
  ];

  const adminLinks = [{ href: "/admin/moderation", label: "Photo Moderation" }];

  const links = session?.user.role === "ADMIN" ? adminLinks : memberLinks;
  
  return <NavClient userInfo={userInfo} links={links} />;
}

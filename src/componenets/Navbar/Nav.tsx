import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Link from "next/link";
import React from "react";
import { PiDogBold } from "react-icons/pi";
import NavLink from "./NavLink";
import UserMenu from "./UserMenu";
import { auth } from "@/auth";
import { getUserInfoForNav } from "@/app/actions/useActions";
import FiltersWrapper from "./FiltersWrapper";

export default async function Nav() {
  const session = await auth();
  const userInfo = session?.user && (await getUserInfoForNav());

  const memberLinks = [
    { href: "/members", label: "Matches" },
    { href: "/lists", label: "Lists" },
    { href: "/messages", label: "Messages" },
  ];

  const adminLinks = [{ href: "/admin/moderation", label: "Photo Moderation" }];

  const links = session?.user.role === "ADMIN" ? adminLinks : memberLinks;
  return (
    <div className="flex flex-col justify-center items-center">
      {/*Desktop Nav */}
      <Navbar maxWidth="lg">
        {/*The Logo*/}
        <NavbarBrand as={Link} href="/">
          <PiDogBold size={14} />
          <div>
            <span>Dog</span>
            <span>Match</span>
          </div>
        </NavbarBrand>
        {/*Center of nav*/}

        <NavbarContent justify="center">
          {links.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </NavbarContent>

        {/*Right hand side of nav*/}
        <NavbarContent justify="end">
          {userInfo ? (
            <UserMenu user={userInfo} />
          ) : (
            <>
              <Button variant="bordered" as={Link} href="/login">
                Login
              </Button>
              <Button variant="bordered" as={Link} href="/register">
                Register
              </Button>
            </>
          )}
        </NavbarContent>
      </Navbar>

      <FiltersWrapper />
    </div>
  );
}

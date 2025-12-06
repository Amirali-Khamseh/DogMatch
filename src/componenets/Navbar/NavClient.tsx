"use client";

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
import FiltersWrapper from "./FiltersWrapper";
import "./style.css";

type Props = {
  userInfo: { name: string | null; image: string | null } | null;
  links: { href: string; label: string }[];
};

export default function NavClient({ userInfo, links }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      {/*Desktop Nav */}
      <Navbar maxWidth="xl">
        {/*The Logo*/}
        <NavbarBrand as={Link} href="/">
          <PiDogBold size={14} className="inline" />
          <div className="font-bold text-inherit inline ml-1">
            <span>Dog</span>
            <span>Match</span>
          </div>
        </NavbarBrand>
        {/*Center of nav*/}

        <NavbarContent justify="center" className="navbar-content">
          {links.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </NavbarContent>

        {/*Right hand side of nav*/}
        <NavbarContent justify="end">
          {userInfo && <UserMenu user={userInfo} />}
          {!userInfo && (
            <>
              <NavbarItem>
                <Button as={Link} href="/login" variant="bordered">
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} href="/register" variant="bordered">
                  Register
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
      <Navbar>
        <NavbarContent
          justify="center"
          className="navbar-content-center-mobile"
        >
          {links.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </NavbarContent>
      </Navbar>

      <FiltersWrapper />
    </div>
  );
}

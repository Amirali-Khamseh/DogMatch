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

export default function Nav() {
  return (
    <Navbar maxWidth="xl">
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
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      {/*Right hand side of nav*/}
      <NavbarContent justify="end">
        <Button variant="bordered" as={Link} href="/login">
          Login
        </Button>
        <Button variant="bordered" as={Link} href="/register">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}

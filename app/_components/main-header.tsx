import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Naa Cheeti Analysis
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/cheeti-paatalu">
            Cheeti Paatalu
          </NavbarLink>
          <NavbarLink as={Link} href="/cheeti-paatalu/create">
            Add Cheeti Paata
          </NavbarLink>
          <NavbarLink as={Link} href="/auth/login">
            Login
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}

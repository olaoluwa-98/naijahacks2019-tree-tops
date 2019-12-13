import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Dropdown, Nav } from "react-bootstrap";

export default function DashBoardNav() {
  const { pathname } = useRouter();
  return (
    <Navbar sticky="top" expand="lg" collapseOnSelect className="elevated">
      <Navbar.Brand href="/">
        <img src={"/img/logo.svg"} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto d-flex align-content-baseline">
          <Nav.Item>
            <Link href="/dashboard/home">
              <a className={pathname === "/dashboard/home" ? "active" : ""}>
                Home
              </a>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/dashboard/profile">
              <a className={pathname === "/dashboard/profile" ? "active" : ""}>
                Profile
              </a>
            </Link>
          </Nav.Item>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="transparent">
            <img
              className="rounded-circle"
              src="https://api.adorable.io/avatars/116/neymar"
              width={40}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

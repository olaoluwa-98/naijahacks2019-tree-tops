import React from "react";
import Link from "next/link";
import { Navbar, Button } from "react-bootstrap";
export default function Nav() {
  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="#home">
        <img src={"/img/logo.svg"} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Link href="/login">
          <Button variant="link" style={{ marginRight: 10, color: "#000" }}>
            Log in
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="primary">Sign up</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

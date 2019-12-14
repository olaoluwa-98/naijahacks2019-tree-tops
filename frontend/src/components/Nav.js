import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import Logo from "assets/img/logo.svg";

export default function Nav() {
  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="#home">
        <img src={Logo} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Link to="/login">
          <Button variant="link" style={{ marginRight: 10, color: "#000" }}>
            Log in
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="primary">Sign up</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

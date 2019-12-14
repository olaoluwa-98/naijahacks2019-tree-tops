import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Dropdown, Nav } from "react-bootstrap";
import Logo from "assets/img/logo.svg";

function DashBoardNav({ location }) {
  const { pathname } = location;
  return (
    <Navbar sticky="top" expand="lg" collapseOnSelect className="elevated">
      <Navbar.Brand href="/">
        <img src={Logo} width={100} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto d-flex align-content-baseline">
          <Nav.Item>
            <Link to="/home">
              <a className={pathname === "/home" ? "active" : ""}>Home</a>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/profile">
              <a className={pathname === "/profile" ? "active" : ""}>Profile</a>
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

export default withRouter(DashBoardNav);

import React from "react";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import AuthContainer from "../components/AuthContainer";

export default function Register() {
  return (
    <AuthContainer>
      <div className="d-flex align-items-baseline" style={{ marginTop: 30 }}>
        <Link href="/login">
          <a className="text-muted" style={{ marginRight: 10 }}>
            Login
          </a>
        </Link>
        <h4>Sign Up</h4>
      </div>
      <Form>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>University</Form.Label>
          <Form.Control type="text" placeholder="University" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Link href="/preferences">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Link>
        </Form.Group>
      </Form>
    </AuthContainer>
  );
}

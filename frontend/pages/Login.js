import React from "react";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import AuthContainer from "../components/AuthContainer";

export default function Login() {
  return (
    <AuthContainer>
      <div className="d-flex align-items-baseline" style={{ marginTop: 30 }}>
        <h4 style={{ marginRight: 10 }}>Login</h4>
        <Link href="/register">
          <a className="text-muted">Sign Up</a>
        </Link>
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form.Group>
      </Form>
    </AuthContainer>
  );
}

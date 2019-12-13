import React from "react";
import Link from "next/link";
import { Card, Form, Button, Col } from "react-bootstrap";

export default function Preferences() {
  return (
    <div className="preferences-page d-flex align-items-center justify-content-end">
      <Card style={{ width: 500 }}>
        <Card.Body>
          <h1>One more thing ...</h1>
          <p>
            We need some details and also your preferences so we can help you
            find the best way to acheive your goal.
          </p>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Programme" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="number" placeholder="Level" />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group style={{ margin: 0 }}>
                  <Form.Control type="number" placeholder="Target CGPA" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group style={{ margin: 0 }}>
                  <Form.Control type="number" placeholder="Current CGPA" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Control type="text" placeholder="Course Preferences" />
            </Form.Group>
            <Form.Group>
              <Link href="/dashboard/home">
                <Button variant="primary" type="submit">
                  Finish
                </Button>
              </Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

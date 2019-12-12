import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => (
  <div>
    <Head>
      <title>TreeTops</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <Container className="hero-section" fluid>
      <Row>
        <Col md={6} xs={12}>
          <h1>Meet your university grade goals</h1>
          <p>
            Get the best path to achieve your university goals and know when you
            are falling short or not.
          </p>
          <Link href="/login">
            <Button>Get started</Button>
          </Link>
        </Col>
        <Col className="text-center">
          <img src={"/img/boy-on-chair.svg"} />
        </Col>
      </Row>
    </Container>
    <Container className="text-center">
      <h2>What we provide you</h2>
      <Row>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card style={{ width: 200, height: 160 }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <img src={"/img/path.svg"} />
              <Card.Text>Get the best path to achieve a grade.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card style={{ width: 200, height: 160 }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <img src={"/img/todo.svg"} />
              <Card.Text>
                Easy tracking of the effects of your efforts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card style={{ width: 200, height: 160 }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <img src={"/img/directions.svg"} />
              <Card.Text>Smart educational decisions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <footer
      style={{
        height: 200
      }}
      className="bg-primary d-flex flex-column justify-content-center align-items-center"
    >
      <div className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faFacebook} color="white" />
        <FontAwesomeIcon icon={faInstagram} color="white" />
        <FontAwesomeIcon icon={faTwitter} color="white" />
      </div>
      <p>&copy; {new Date().getFullYear()} TreeTops.</p>
    </footer>
  </div>
);

export default LandingPage;

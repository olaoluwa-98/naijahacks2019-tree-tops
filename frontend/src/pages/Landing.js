import React from "react";
import Nav from "components/Nav";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import ChairIcon from "assets/img/boy-on-chair.svg";
import PathIcon from "assets/img/path.svg";
import TodoIcon from "assets/img/todo.svg";
import DirecttionsIcon from "assets/img/directions.svg";

const LandingPage = () => (
  <div>
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
          <img src={ChairIcon} />
        </Col>
      </Row>
    </Container>
    <Container className="text-center">
      <h2>What we provide you</h2>
      <Row>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card style={{ width: 200, height: 160 }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <img src={PathIcon} />
              <Card.Text>Get the best path to achieve a grade.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card style={{ width: 200, height: 160 }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <img src={TodoIcon} />
              <Card.Text>
                Easy tracking of the effects of your efforts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card style={{ width: 200, height: 160 }}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <img src={DirecttionsIcon} />
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
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: 150, marginBottom: 20 }}
      >
        <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
        <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
        <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
      </div>
      <p className="text-white">&copy; {new Date().getFullYear()} TreeTops.</p>
    </footer>
  </div>
);

export default LandingPage;

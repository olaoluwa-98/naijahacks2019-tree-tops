import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import DashBoardContainer from "components/DashBoardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export default function Profile() {
  return (
    <DashBoardContainer>
      <Container className="d-flex justify-content-center">
        <Card style={{ maxWidth: 700, width: "calc(100% - 20px)" }}>
          <Card.Body style={{ padding: 40 }}>
            <section
              className="d-flex align-items-center"
              style={{ flexWrap: "wrap" }}
            >
              <img
                className="rounded-circle"
                src="https://api.adorable.io/avatars/116/neymar"
                width={100}
                style={{ marginRight: 20 }}
              />
              <div>
                <h4>Emmanuel Neymar Jr</h4>
                <span className="text-muted">
                  200 level Computer Science student
                </span>
              </div>
            </section>
            <hr />
            <section>
              <div className="profile-list-item">
                <span className="title text-muted">Email</span>
                <p className="content">john.doe@gmail.com</p>
              </div>
            </section>
            <hr />
            <section>
              <div className="profile-list-item">
                <span className="title text-muted">Current Level</span>
                <p className="content">200</p>
              </div>
              <div className="profile-list-item">
                <span className="title text-muted">University</span>
                <p className="content">Babcock University</p>
              </div>
              <div className="profile-list-item">
                <span className="title text-muted">Programme</span>
                <p className="content">Computer science</p>
              </div>
              <div className="profile-list-item">
                <span className="title text-muted">Target CGPA</span>
                <p className="content">4.25</p>
              </div>
              <div className="profile-list-item">
                <span className="title text-muted">Current CGPA</span>
                <p className="content">3.25</p>
              </div>
            </section>
            <Button variant="light" className="float-right">
              <FontAwesomeIcon icon={faEdit} />
              <span style={{ marginLeft: 10 }}>Edit Profile</span>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </DashBoardContainer>
  );
}

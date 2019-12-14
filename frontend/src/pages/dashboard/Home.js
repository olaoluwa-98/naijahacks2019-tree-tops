import React from "react";
import { Container, Card, Row, Col, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import DashBoardContainer from "components/DashBoardContainer";
import PieChart from "components/PieChart";

function Home() {
  return (
    <DashBoardContainer>
      <Container>
        <h1 className="font-weight-light text-muted">
          How are you doing today Neymar?
        </h1>
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  Grade Details
                  <Button
                    variant="link"
                    style={{
                      color: "#000"
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Card.Title>
                <Table borderless hover responsive>
                  <tbody>
                    <tr>
                      <td>Current Grade</td>
                      <td className="text-success font-weight-bold float-right">
                        4.25
                      </td>
                    </tr>
                    <tr>
                      <td>Highest Attainable</td>
                      <td className="text-danger font-weight-bold float-right">
                        4.25
                      </td>
                    </tr>
                    <tr>
                      <td>Desired Grade</td>
                      <td className="font-weight-bold float-right">4.25</td>
                    </tr>
                    <tr>
                      <td>Predicted Grade</td>
                      <td className="font-weight-bold float-right">4.25</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  Semester Details
                  <Button
                    variant="link"
                    style={{
                      color: "#000"
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Card.Title>
                <Row>
                  <Col xs={12} md={6}>
                    <Table borderless hover responsive>
                      <tbody>
                        <tr>
                          <td>Current Semester</td>
                          <td className="font-weight-bold float-right">2nd</td>
                        </tr>
                        <tr>
                          <td>Current Session</td>
                          <td className="font-weight-bold float-right">
                            2018/2019
                          </td>
                        </tr>
                        <tr>
                          <td>University</td>
                          <td className="font-weight-bold float-right">
                            Covenant university
                          </td>
                        </tr>
                        <tr>
                          <td>Program</td>
                          <td className="font-weight-bold float-right">
                            Computer Science
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col xs={12} md={6}>
                    <Table borderless hover responsive>
                      <tbody>
                        <tr>
                          <td>Level</td>
                          <td className="font-weight-bold float-right">200</td>
                        </tr>
                        <tr>
                          <td>No of Courses</td>
                          <td className="font-weight-bold float-right">10</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Card.Title>Recommendations</Card.Title>
            <p className="text-muted">
              Showing recomendations for 1st semester of 2nd year
            </p>
            <Row>
              <Col xs={12} md={4}>
                <h6>Required Course Grades</h6>
                <Table borderless hover responsive>
                  <tr>
                    <th>Course</th>
                    <th>Unit</th>
                    <th>Grade</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>CSC213</td>
                      <td>3</td>
                      <td className="font-weight-bold float-right">A</td>
                    </tr>
                    <tr>
                      <td>CSC213</td>
                      <td>3</td>
                      <td className="font-weight-bold float-right">A</td>
                    </tr>
                    <tr>
                      <td>CSC213</td>
                      <td>3</td>
                      <td className="font-weight-bold float-right">A</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col xs={12} md={8} className="d-flex justify-content-center">
                <PieChart title="Targeted Grade Composition" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </DashBoardContainer>
  );
}

export default Home;

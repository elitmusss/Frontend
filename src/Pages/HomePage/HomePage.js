import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

//import App from ''
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <img
        className="center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRT81yYbSSdvk-8orr_JHfVz-Acw55ym50A&usqp=CAU"
        alt="Home"
      />
      <h1 className="center">Get started with the games</h1>

      <br />
      <Container class="container">
        <Row>
          <Col>
            <Link to="/game2">
              <Card border="secondary" style={{ width: "20em" }}>
                <Card.Header>Game</Card.Header>
                <Card.Body style={{ fontFamily: "monospace" }}>
                  <Card.Title style={{ fontFamily: "monospace", color: "red" }}>
                    The Bell Game
                  </Card.Title>
                  <Card.Text>
                    Listen to the bell count and guess it correctly to move to
                    the next round!!!!!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

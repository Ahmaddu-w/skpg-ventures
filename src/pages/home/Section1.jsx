import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import team from "../../images/teamw.png";
import global from "../../images/global.png";
import sustain from "../../images/sustain.png";
import quality from "../../images/qualityy.png";

const Section1 = () => {
  return (
    <>
    <div style={{ backgroundColor: "#D9D9D93D" }}>

      <Container
        className="mt- mb-5 pb-5"
        
      >
        <Row className="text-center pt-5">
          <h1 style={{ fontSize: 40, fontWeight: 700 }}>
            Our Missions & Goals
          </h1>
          <p style={{ fontSize: 18, marginTop: 15 }}>
            Bridging global markets with premium natural products while
            maintaining the <br /> highest standards of quality and
            sustainability.
          </p>
        </Row>
        <Row className="mt-5 mb-5 pb-5">
          <Col sm={12} md={6}>
            <img src={team} alt="team working" className="img-fluid" />
          </Col>
          <Col>
            <Card className="p-4 cards mb-3">
              <div className="ms-3">
                <img src={global} alt="global logo" className="img-fluid" />
              </div>
              <Card.Body>
                <Card.Title>Global Market Leadership</Card.Title>
                <Card.Text>
                  To become the world's most trusted supplier of premium natural
                  products, connecting manufacturers and traditional medicine
                  practitioners across continents with ethically sourced
                  materials.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-4 cards mb-3">
              <div className="ms-3">
                <img src={sustain} alt="global logo" className="img-fluid" />
              </div>
              <Card.Body>
                <Card.Title>Sustainable Sourcing</Card.Title>
                <Card.Text>
                  Committed to environmentally responsible practices and ethical
                  sourcing methods that support local communities while
                  preserving natural resources for future generations.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-4 cards">
              <div className="ms-3">
                <img src={quality} alt="global logo" className="img-fluid" />
              </div>
              <Card.Body>
                <Card.Title>Quality Excellence</Card.Title>
                <Card.Text>
                  Maintaining the highest international quality standards
                  through rigorous testing, certification processes, and
                  continuous improvement in our supply chain management.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Section1;

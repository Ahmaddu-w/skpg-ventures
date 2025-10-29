import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import shipping from "../images/shipping.png";
import quality from "../images/qualityy.png";
import support from "../images/support.png";
import document from "../images/document.png";
import price from "../images/price.png";
import fast from "../images/fast.png";
import Journey from "./Journey";

const ChooseUs = () => {
  const carrds = [
    {
      id: 0,
      img: shipping,
      text: "Global Shipping",
      text1:
        "Worldwide delivery with secure packaging and tracking. We ensure your products arrive safely and on time.",
    },
    {
      id: 1,
      img: quality,
      text: "Quality Assurance",
      text1:
        "Rigorous testing and certification processes to guarantee the highest quality standards for all products.",
    },
    {
      id: 2,
      img: support,
      text: "24/7 Support",
      text1:
        "Round-the-clock customer support to assist with orders, inquiries, and after-sales service.",
    },
    {
      id: 3,
      img: document,
      text: "Documentation",
      text1:
        "Complete export documentation, certificates, and compliance with international trade regulations.",
    },
    {
      id: 4,
      img: price,
      text: "Competitive Pricing",
      text1:
        "Best market prices with flexible payment terms and bulk order discounts for regular customers.",
    },
    {
      id: 5,
      img: fast,
      text: "Fast Processing",
      text1:
        "Quick order processing and preparation to meet your delivery deadlines and business requirements.",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#D9D9D93D" }}>
        <Container
          style={{ backgroundColor: "#F6F6F6" }}
          className="py-5 mt-5 mb-5 "
        >
          <Row className="text-center mb-5">
            <h1 style={{ fontSize: 40, fontWeight: 700 }}>Why Choose Us?</h1>
            <p style={{ fontSize: 18, marginTop: 15 }}>
              Comprehensive export services designed to meet your business needs
              and <br /> ensure smooth international trade.
            </p>
          </Row>
          <Row className="mb-5 pb-4">
            {carrds.map((cad) => (
              <Col md={4} key={cad.id}>
                <Card className="p-4 cards mb-3">
                  <div className="ms-3">
                    <img
                      src={cad.img}
                      alt="global logo"
                      className="img-fluid"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{cad.text}</Card.Title>
                    <Card.Text>{cad.text1}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Journey />
        </Container>
      </div>
    </>
  );
};

export default ChooseUs;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bones from "../../images/bones.png";

const BelowBanner = () => {
  const widt = {
    width: 400,
    fontWeight: 500,
  };

  const blueColor = { color: "#181A88" };
  return (
    <>
      <div style={{ backgroundColor: "#D9D9D93D" }}>
        <Container className="pt-5 mb-5" style={{ backgroundColor: "#F6F6F6" }}>
          <Row>
            <h1 className="text-center mb-5">About Us</h1>
            <Col sm={12} md={6} className="mb-5">
              <img src={bones} alt="picture of bones" className="img-fluid" />
            </Col>
            <Col>
              <div style={widt}>
                <p className="mb-4">
                  Akeredolu SPKG Ventures is a leading international export
                  company dedicated to sourcing, processing, and delivering
                  high-quality natural products derived from livestock and
                  plants. We specialize in the exportation of cow horns, cow
                  gallstones, cow bones, bone charcoal, and green leaves to
                  clients across Europe, Asia, the Middle East, and beyond.
                </p>
                <p className="mb-4">
                  Our commitment to quality, sustainability, and integrity has
                  positioned us as a trusted name in the natural product export
                  industry. Every product we deliver is carefully selected,
                  processed under strict hygiene and export standards, and
                  packaged to maintain purity and freshness throughout transit.
                </p>
                <p>
                  We look to providing premium-grade natural products to global
                  markets while promoting sustainable sourcing, fair trade
                  practices, and value creation for local farmers and
                  communities.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="mt-5 pt-4">
        <Row className="p-5" style={{ backgroundColor: "#181A88" }}>
          <Col className="p-5">
            <div className="bg-light p-5 rounded-2">
              <h1 style={blueColor}>Our Mission</h1>
              <p className="mt-3 fw-bold">
                As the company that carries the largest and most diverse stock
                of horn, bone and antler in the whole of Africa and has been in
                service for over 25 years, Our Mission is to be the world's most
                trusted supplier of premium natural products, specializing in
                the ethical export of cow horns, gallstones, bones, charcoal,
                and green leaves. We bridge global markets while maintaining the
                highest standards of quality, sustainability, and cultural
                respect.
              </p>
            </div>
          </Col>
          <Col className="mt-5 mt-md-0 p-5">
            <div className="bg-light p-5 rounded-2">
              <h1 style={blueColor}>Our Mission</h1>
              <p className="mt-3 fw-bold">
                As the company that carries the largest and most diverse stock
                of horn, bone and antler in the whole of Africa and has been in
                service for over 25 years, Our Mission is to be the world's most
                trusted supplier of premium natural products, specializing in
                the ethical export of cow horns, gallstones, bones, charcoal,
                and green leaves. We bridge global markets while maintaining the
                highest standards of quality, sustainability, and cultural
                respect.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BelowBanner;

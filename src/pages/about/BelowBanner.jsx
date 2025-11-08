import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bones from "../../images/bones.png";

const BRAND_BLUE = "#181A88";

const BelowBanner = () => {
  return (
    <>
      <div className="bg-light py-5">
        <Container
          className="p-4 p-md-5 rounded-3 "
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <Row className="align-items-center">
            <h1 className="text-center mb-5 fw-bold fs-2 fs-lg-1">About Us</h1>
            <Col sm={12} md={6} className="mb-4 mb-md-0">
              <img
                src={bones}
                alt="bones"
                className="img-fluid rounded-3"
              />
            </Col>

            <Col sm={12} md={6}>
              <div className="fw-normal fs-6">
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

      <Container fluid className="py-5" style={{ backgroundColor: BRAND_BLUE }}>
        <Row className="justify-content-center px-3 px-md-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="bg-white p-4 p-md-5 rounded-3 shadow">
              <h2 className="fw-bold mb-3 fs-3" style={{ color: BRAND_BLUE }}>
                Our Mission
              </h2>
              <p className="mt-3 fw-bold fs-6">
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

          <Col lg={6}>
            <div className="bg-white p-4 p-md-5 rounded-3 shadow">
              <h2 className="fw-bold mb-3 fs-3" style={{ color: BRAND_BLUE }}>
                Our Vision
              </h2>
              <p className="mt-3 fw-bold fs-6">
                To create a sustainable global network that connects traditional
                medicine practitioners, manufacturers, and artisans worldwide
                with ethically sourced natural materials, fostering economic
                growth while preserving cultural heritage and environmental
                integrity.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BelowBanner;

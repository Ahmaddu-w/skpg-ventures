import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import man from "../../images/thinkingman.png";

const Choose = () => {
  const styl = { fontWeight: 700, fontSize: 40 };
  return (
    <>
      <div className="mt-5 pt-5 pb-5">
        <Container fluid>
          <Row style={{ backgroundColor: "#D9D9D93D" }}>
            <Col className="justify-content-center d-flex flex-column p-5 ms-5">
              <div>
                <h1 style={styl}>Why Choose Us?</h1>
              </div>
              <div className="mt-5">
                <ul>
                  <li>Global Shipping</li>
                  <li className="mt-3">Quality Assurance</li>
                  <li className="mt-3">24/7 Support</li>
                  <li className="mt-3">Documentation</li>
                  <li className="mt-3">Competitive Pricing</li>
                  <li className="mt-3">Fast Processing</li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md>
              <img src={man} alt="man thinking" className="img-fluid mx-auto d-flex" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Choose;

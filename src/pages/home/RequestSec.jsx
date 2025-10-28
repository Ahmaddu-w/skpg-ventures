import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

import skull from "../../images/skull.png";
import Buttons from "../../Components.jsx/Buttons";

const Request = () => {
  return (
    <>
      <Container className="pt-5 mb-5 pb-5">
        <Row className="text-center pb-5">
          <h2 style={{fontWeight: 800, fontSize: 24}}>Request a Product</h2>
          <p style={{ fontSize: 18, marginTop: 15 }}>
            Ready to start your export journey? Contact us for personalized
            quotes an <br /> expert consultation
          </p>
        </Row>
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <img src={skull} alt="a bull skull" className="img-fluid" />
          </Col>
          <Col style={{ backgroundColor: "#F5F5F5" }} className="p-5 align-items-center">
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control placeholder="Your full name"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Company Name*</Form.Label>
                    <Form.Control placeholder="Your company name"></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Email Address*</Form.Label>
                    <Form.Control placeholder="Your @mail.com"></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Product Interest*</Form.Label>
                    <Form.Control placeholder="Select a product"></Form.Control>
                  </Form.Group>
                </Col>
                <Form.Group className="mb-2">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control placeholder="Tell us about your requirements, quantities, and any specific questions..." style={{paddingBottom: 120}}></Form.Control>
                </Form.Group>
                <Form.Label className="mb-4">
                  0/500 characters
                </Form.Label>
                <Buttons text='Send Message' />
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Request;

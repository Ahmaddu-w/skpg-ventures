import React, { useState } from "react"; 
import { Col, Container, Row, Form } from "react-bootstrap";
import skull from "../../images/skull.png";
import Buttons from "../../Components.jsx/Buttons";

const Request = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    productInterest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    setFormData({
      fullName: "",
      companyName: "",
      emailAddress: "",
      productInterest: "",
      message: "",
    });
  };

  const messageCharCount = formData.message.length;
  const MAX_CHARACTERS = 500;

  return (
    <>
      <Container className="pt-5 mb-5 pb-5">
        <Row className="text-center pb-5">
          <h2 style={{ fontWeight: 800, fontSize: 24 }}>Request a Product</h2>
          <p style={{ fontSize: 18, marginTop: 15 }}>
            Ready to start your export journey? Contact us for personalized
            quotes an <br /> expert consultation
          </p>
        </Row>
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <img src={skull} alt="a bull skull" className="img-fluid" />
          </Col>

          <Col
            style={{ backgroundColor: "#F5F5F5" }}
            className="p-5 d-flex flex-column justify-content-center"
          >
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                      placeholder="Your full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Company Name*</Form.Label>
                    <Form.Control
                      placeholder="Your company name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Email Address*</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your @mail.com"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Product Interest*</Form.Label>
                    <Form.Control
                      placeholder="Select a product"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Form.Group className="mb-2 mt-4">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Tell us about your requirements, quantities, and any specific questions..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ paddingBottom: 10, minHeight: 120 }}
                    maxLength={MAX_CHARACTERS}
                    required
                  />
                </Form.Group>
                <Form.Label className="mb-4">
                  {messageCharCount}/{MAX_CHARACTERS} characters
                </Form.Label>
                  <div className="text-center">

                <Buttons text="Send Message" type="submit" />
                  </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Request;

import React from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import {
  BsClockFill,
  BsEnvelope,
  BsGeoAltFill,
  BsTelephoneFill,
} from "react-icons/bs";
import Buttons from "../../Components.jsx/Buttons";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const ContactSec1 = () => {
  const styl = {
    backgroundColor: "#C5C6E1",
    width: "fit-content",
    borderRadius: 7,
    alignItems: "flex-start",
    display: "flex",
  };

  const blu = { color: "#181A88" };
  return (
    <>
      <div className="py-4 py-lg-5" style={{ backgroundColor: "#F6F6F6" }}>
        <Container>
          <Row className="p-3 p-lg-5">
            <Col sm={12} md={6} className="mb-5 mb-md-0">
              <div>
                <h3 className="fs-3 fw-bold">Get In Touch</h3>

                <div className="d-flex gap-2 align-items-start mt-4 mb-4">
                  <div>
                    <span style={styl} className="p-2 me-2">
                      <BsGeoAltFill size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Our Location</p>
                    <p className=" mb-0">Export Dept:+1 (555) 123-4567</p>
                    <p className=" mb-0">Intl. Contact:+44 20 7123 4567</p>
                    <p className="mb-0">
                      Nigerian contact:+234 (0)256 374 8930
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-2 align-items-start mb-4">
                  <div>
                    <span style={styl} className="p-2 me-2">
                      <BsTelephoneFill size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Phone Number</p>
                    <p className="mb-0">25A Downway street</p>
                    <p className="mb-0">Chicago</p>
                  </div>
                </div>

                <div className="d-flex gap-2 align-items-start mb-4">
                  <div>
                    <span style={styl} className="p-2 me-2">
                      <BsEnvelope size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Email Addresses</p>
                    <p className=" mb-0">General: info@SPKG.com</p>
                    <p className=" mb-0">Sales: sales@SPKG.com</p>
                    <p className="mb-0">Support: support@SPKG.com</p>
                  </div>
                </div>

                <div className="d-flex gap-2 align-items-start mb-4">
                  <div>
                    <span style={styl} className="p-2 me-2">
                      <BsClockFill size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Business Hours</p>
                    <p className=" mb-0">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className=" mb-0">Saturday: 9:00 AM - 4:00PM</p>
                    <p className="mb-0">Sunday: Closed</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="fw-bold">Follow Us</p>
                  <Stack direction="horizontal" gap={3}>
                    <FaInstagram size={35} color="#181A88" />
                    <FaTwitter size={35} color="#181A88" />
                    <FaFacebookSquare size={35} color="#181A88" />
                    <FaLinkedin size={35} color="#181A88" />
                  </Stack>
                </div>
              </div>
            </Col>

            <Col sm={12} md={6} className="bg-light p-4 p-lg-5">
              <Form>
                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-5">
                      <Form.Label>Full Name*</Form.Label>
                      <Form.Control placeholder="Your full name"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-5">
                      <Form.Label>Email Address*</Form.Label>
                      <Form.Control placeholder="Your @mail.com"></Form.Control>
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Group className="mb-5">
                      <Form.Label>Country*</Form.Label>
                      <Form.Control placeholder="Your country"></Form.Control>
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Group className="mb-4">
                      <Form.Label>Message*</Form.Label>

                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Tell Us"
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={12} className="d-flex flex-column">
                    <Form.Label className="mb-4">0/500 characters</Form.Label>
                    <Buttons text="Send Message" className="w-100" />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactSec1;

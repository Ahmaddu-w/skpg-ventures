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
    padding: 10,
    borderRadius: 7,
    alignItems: "top",
    display: "flex",
  };

  const blu = { color: "#181A88" };
  return (
    <>
      <div className="py-5 " style={{ backgroundColor: "#F6F6F6" }}>
        <Container>
          <Row className="p-lg-5 p-5 ">
            <Col sm={12} md={6} className="mb-5 ">
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 800 }}>Get In Touch</h3>
                <div className="d-flex gap-1 align-it mt-4">
                  <div>
                    <span style={styl} className="me-2">
                      <BsGeoAltFill size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Our Location</p>
                    <p className=" mb-0">Export Dept:+1 (555) 123-4567</p>
                    <p className=" mb-0">Intl. Contact:+44 20 7123 4567</p>
                    <p>Nigerian contact:+234 (0)256 374 8930</p>
                  </div>
                </div>
                <div className="d-flex gap-1 align-it">
                  <div>
                    <span style={styl} className="me-2">
                      <BsTelephoneFill size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Phone Number</p>
                    <p>
                      25A Downway street <br /> Chicago
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-1 align-it">
                  <div>
                    <span style={styl} className="me-2">
                      <BsEnvelope size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Email Addresses</p>
                    <p className=" mb-0">General: info@SPKG.com</p>
                    <p className=" mb-0">Sales: sales@SPKG.com</p>
                    <p>Support: support@SPKG.com</p>
                  </div>
                </div>
                <div className="d-flex gap-1 align-it">
                  <div>
                    <span style={styl} className="me-2">
                      <BsClockFill size={20} style={blu} />
                    </span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Business Hours</p>
                    <p className=" mb-0">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className=" mb-0">Saturday: 9:00 AM - 4:00PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p style={{ fontWeight: 600 }}>Follow Us</p>
                  <Stack direction="horizontal" gap={2}>
                    <FaInstagram size={35} color="#181A88" />
                    <FaTwitter size={35} color="#181A88" />
                    <FaFacebookSquare size={35} color="#181A88" />
                    <FaLinkedin size={35} color="#181A88" />
                  </Stack>
                </div>
              </div>
            </Col>
            <Col className="bg-light p-5">
              <Form>
                <Row>
                  <Col>
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
                  <Form.Group className="mb-5">
                    <Form.Label>Country*</Form.Label>
                    <Form.Control placeholder="Your country"></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message*</Form.Label>
                    <Form.Control
                      placeholder="Tell Us"
                      style={{ paddingBottom: 120 }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Label className="mb-4">0/500 characters</Form.Label>
                  <Buttons text="Send Message" />
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

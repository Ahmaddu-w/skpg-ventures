import React from "react";
import { Col, Container, Nav, Row, Stack } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { BsClockFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPlus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="pt-5 mt-3">
        <Container>
          <Row>
            <Col xs={12} lg={4} className="mb-4">
              <img src={logo} alt="brand logo" className="img-fluid" />
              <p className="mb-4">
                Leading international export company specializing in premium
                quality natural products. We bridge global markets with
                sustainable and ethically sourced materials.
              </p>
              <div className="text-center">
                <Stack direction="horizontal" gap={2}>
                  <FaInstagram size={35} color="#181A88" />
                  <FaTwitter size={35} color="#181A88" />
                  <FaFacebookSquare size={35} color="#181A88" />
                  <FaLinkedin size={35} color="#181A88" />
                </Stack>
              </div>
            </Col>
            <Col
              xs={6}
              md={3}
              lg={2}
              className="mb-4 d-flex flex-column align-items-md-end "
            >
              <ul className="list-unstyled">
                <li className="fw-bold">PRODUCTS</li>
                <li className="mt-4">
                  {" "}
                  <FaPlus size={8} color="#181A88" className="me-2" />
                  Cow horns
                </li>
                <li className="mt-2">
                  <FaPlus size={8} color="#181A88" className="me-2" />
                  Cow Gullstones
                </li>
                <li className="mt-2">
                  <FaPlus size={8} color="#181A88" className="me-2" />
                  Charcoal
                </li>
                <Link className="text-decoration-none text-dark">
                  <li className="mt-2">
                    <FaPlus size={8} color="#181A88" className="me-2" />
                    Green Leaves
                  </li>
                </Link>
              </ul>
            </Col>
            <Col
              xs={12}
              md={3}
              lg={2}
              className="mb-4 d-flex flex-column align-items-md-end"
            >
              <ul className="list-unstyled">
                <li className="fw-bold">COMPANY</li>

                <Link className="text-decoration-none text-dark">
                  <li className="mt-4">
                    <FaPlus size={8} color="#181A88" className="me-2" />
                    About Us
                  </li>
                </Link>
                <Link className="text-decoration-none text-dark">
                  <li className="mt-2">
                    <FaPlus size={8} color="#181A88" className="me-2" />
                    Make a Request
                  </li>
                </Link>
              </ul>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex flex-column align-items-md-end"
            >
              <div>
                <p className="head">CONTACT</p>
                <p>
                  <BsGeoAltFill style={{ color: "#181A88", marginRight: 7 }} />
                  25A Downway street Chicago
                </p>
                <p>
                  <BsTelephoneFill
                    style={{ color: "#181A88", marginRight: 7 }}
                  />
                  Sales@SPKG.com
                </p>
                <p>
                  <BsClockFill style={{ color: "#181A88", marginRight: 7 }} />
                  8:00 AM - 6:00 PM
                </p>
                <p>
                  <BsTelephoneFill
                    style={{ color: "#181A88", marginRight: 7 }}
                  />
                  +1 (555) 123-4567 <br /> +44 20 7123 4567
                </p>
              </div>
            </Col>
            <hr className="mt-3" />
            <p className="mb-4 text-center text-md-start">
              2025 Global SPKG Exports. All rights reserved
            </p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

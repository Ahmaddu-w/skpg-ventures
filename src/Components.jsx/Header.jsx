import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/request");
  };
  const butto = {
    backgroundColor: "#181A88",
    color: "white",
    padding: "10px 20px",
    borderRadius: 10,
    border: "none",
    display: "block",
    width: "100%",
    textAlign: "center",
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#181A88" }}
            >
              <img src={logo} alt="Brand-Logo" />
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contacts
              </Nav.Link>
            </Nav>

            <Nav>
                <button onClick={handleNavigate} className="my-button">
                  Make a request
                </button>
                
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

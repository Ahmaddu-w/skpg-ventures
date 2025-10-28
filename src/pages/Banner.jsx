import React from "react";
import Container from "react-bootstrap/esm/Container";
import hero from "../images/heroImage.png";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Banner = (prop) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/product");
  };

  const styl = {
    contain: {
      fontSize: "65px",
      color: "white",
      fontWeight: 700,
    },

    butto: {
      backgroundColor: "#181A88",
      padding: "18px 22px",
      borderRadius: 10,
      color: "white",
      border: "none",
    },
  };

  return (
    <>
      <Container
        fluid
        className="p-0 align-items-center justify-content-center d-flex  hero-bg"
      >
        <div className="text-center box">
          <h1 style={styl.contain} className="mb-3">
            {prop.text}
          </h1>
          <p style={{ fontSize: 18, fontWeight: 500 }}>{prop.text1}</p>
          <div className="text-center mt-5">
            <button className="my-buttonn fw-bold">View Products</button>
            <button
              onClick={handleNavigate}
              className="ms-3 my-buttonnn fw-bold"
            >
              Schedule Call
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;

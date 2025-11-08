import React from "react";
import { Container, Row } from "react-bootstrap";

const Bann = ({ always, neww, imageImport }) => {
  const ban = {
    backgroundImage: `url(${imageImport})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    color: "white",
    minHeight: "80vh",
  };

  const BlurBan = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    opacity: 0.35,
    zIndex: 1,
  };

  return (
    <Container fluid className="p-0">
      <Row className="mx-0">
        <div
          className="d-flex justify-content-center align-items-center text-light fw-bold flex-column text-center py-5 py-md-0 bgg"
          style={ban}
        >
          <div style={BlurBan}></div>

          <h1
            className="fw-bold mb-4 position-relative px-3"
            style={{
              zIndex: 2,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
            }}
          >
            {always}
          </h1>

          <div
            className="position-relative px-4"
            style={{
              zIndex: 2,

              fontSize: "clamp(1rem, 1.5vw, 1.6rem)",
              fontWeight: 500,
              maxWidth: "850px",
            }}
          >
            {neww && (
              <p className="text-center mt-4 mb-0">
                Ready to start your natural products export journey? Get in
                touch with our expert
                <br className="d-none d-lg-inline" /> team for personalized
                solutions and competitive pricing.
              </p>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Bann;

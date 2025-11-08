import React from "react";
import { Container, Row, Stack } from "react-bootstrap";

const Journey = () => {
  
  return (
    <>
      <Container
        style={{ backgroundColor: "#181A88" }}
        className="rounded-4 mt-5 p"
      >
        <Row className="text-center text-light p-5">
          <h1 style={{ fontWeight: 800, fontSize: 24 }}>
            Ready to Start Your Export Journey?
          </h1>
          <p style={{ fontSize: 18, marginTop: 12 }}>
            Contact us today for a personalized quote and discover how we can
            help you grow your business globally.
          </p>
          <Stack
            className="mt-3 mb-5 text-center mx-auto d-flex flex-column flex-md-row"
            direction="horizontal"
            gap={2}
            style={{ width: "fit-content" }}
          >
            <button size="lg" className="butt">
              Get Free Quote
            </button>
            <button size="lg" className="ms-4 my-buttonnn">
              Schedule Call
            </button>
          </Stack>
        </Row>
      </Container>
    </>
  );
};

export default Journey;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sophie from "../../images/sophia.png";
import star from "../../images/stars.png";
import sanchez from "../../images/sanchez.png";
import lola from "../../images/lola.png";
import hameed from "../../images/hameed.png";

const BelowBanner2 = () => {
  const carrds = [
    {
      id: 0,
      img: sophie,
      text1: "Sophia Macbeth",
      text2: "Traditional Crafts Ltd",
      text3: "United States",
      text4:
        "Exceptional quality cow horns that meets all our traditionalcraft requirements. The  consistency and reliability of their supply chain is outstanding.",
    },
    {
      id: 1,
      img: sanchez,
      text1: "Sanchez",
      text2: "Eco Craft Artisan",
      text3: "Germany",
      text4:
        "Our business depends on high-quality cow horns for carving and handicraft production. This supplier provides premium materials that are ethically sourced and beautifully processed.",
    },
    {
      id: 2,
      img: hameed,
      text1: "Hameed Hassan",
      text2: "Industrial Charcoal Co.",
      text3: "United Arab Emirates",
      text4:
        "Perfect cow bones for our charcoal production. Clean, properlyprocessed and delivered on time. Not to leave out that their customer service is excellent.",
    },
    {
      id: 3,
      img: lola,
      text1: "Lola Volcan",
      text2: "MedPharm Importer",
      text3: "United Kingdom",
      text4:
        "The cow gallstones we receive are always of top pharmaceutical grade. Documentation is thorough, and the communication is excellent. We truly appreciate their reliability and commitment to meeting our specifications.",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#D9D9D93D" }}>
        <Container>
          <Container className="mt-5">
            <Row className="text-center pt-4">
              <h1 style={{ fontWeight: 700 }}>
                What Our <span style={{ color: "#181A88" }}>Clients Say</span>
              </h1>
              <p className="mt-2" style={{ fontSize: 18 }}>
                Trusted by businesses worldwide for our quality products and
                exceptional service
              </p>
            </Row>
            <Row>
              {carrds.map((cad) => (
                <Col md={6} key={cad.id} className="mb-3 mt-4">
                  <div className="bg-white p-3 ">
                    <div className="d-flex">
                      <span className="me-3">
                        <img src={cad.img} alt="" className="img-fluid" />
                      </span>
                      <div>
                        <h5 style={{ fontSize: 18, marginBottom: 0 }}>
                          {cad.text1}
                        </h5>
                        <p style={{ fontSize: 14, marginBottom: 0 }}>
                          {cad.text2}
                        </p>
                        <p style={{ fontSize: 14 }}>{cad.text3}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <img src={star} alt="five star" className="img-fluid" />
                      <p>{cad.text4}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default BelowBanner2;

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import horn from "../../images/horn.png";
import image from "../../images/gall.png";
import bone from "../../images/bone.png";
import Buttons from "../../Components.jsx/Buttons";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Products = () => {
  const carrd = [
    {
      id: "0",
      img: horn,
      text: "Premium Cow Horns",
      text1:
        "High-quality cow horns for manufacturing, crafts, and traditional applications. Carefully processed and graded for various industrial uses.",
    },
    {
      id: "1",
      img: image,
      text: "Cow Gallstones",
      text1:
        "Pharmaceutical grade cow gallstones for traditional medicine and research applications. Sourced and processed under strict quality controls.",
    },
    {
      id: "2",
      img: bone,
      text: "Processed Cow Bones",
      text1:
        "Carefully processed cow bones for various industrial applications including manufacturing, crafts and traditional uses.",
    },
  ];

  return (
    <>
      <Container className="mt-5 pt-5 mb-5 pb-5">
        <Row className="text-center">
          <h1 style={{ fontWeight: 700 }}>Our Premium Products</h1>
          <p style={{ fontSize: 18, marginTop: 15 }}>
            Discover our comprehensive range of natural products, each carefully
            sourced <br /> and processed to meet international quality standards
          </p>
        </Row>
        <Row className="mt-5">
          {carrd.map((cad) => (
            <Col key={cad.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={cad.img} />
                <Card.Body className="mb-4 justify-content-center d-flex flex-column">
                  <Card.Title style={{ fontWeight: 600, fontSize: 18 }}>
                    {cad.text}
                  </Card.Title>
                  <Card.Text className="mb-4">{cad.text1}</Card.Text>

                  <Buttons text="Make a Request" />
                </Card.Body>
              </Card>
            </Col>
          ))}

          <Link to="" className="text-dark">
            <p className="text-md-end text-center" style={{ fontSize: 14, fontWeight: 600 }}>
              See More <BsArrowRight />
            </p>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default Products;

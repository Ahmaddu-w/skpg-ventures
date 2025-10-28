import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import horn from "../../images/premiumhorn.png";
import gall from "../../images/gallstones.png";
import hornss from "../../images/hornss.png";
import leaves from "../../images/leaves.png";
import charcoal from "../../images/charcoal.png";
import Buttons from "../../Components.jsx/Buttons";

const ProductSec1 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#D9D9D93D" }}>
        <Container className=" mb-5">
          <Row className="text-center  mb-5 pt-5 pb-5">
            <h1 style={{ fontWeight: 700 }}>Our Products</h1>
            <p style={{ fontSize: 18 }}>
              Discover our comprehensive range of natural products, each
              carefully sourced <br /> and processed to meet international
              quality standards
            </p>
          </Row>
          <Row className=" pb-5 ">
            <Col sm={12} md={6}>
              <img src={horn} alt="brown horn" className="img-fluid" />
            </Col>
            <Col>
              <div>
                <h4>Premium Cow Horns</h4>
                <p>
                  High-quality cow horns for manufacturing, crafts, and
                  traditional <br /> applications. Carefully processed and
                  graded for various industrial <br /> uses.
                </p>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="fw-bold">Specifications:</li>
                    <li>Grade A Quality</li>
                    <li>Various sizes</li>
                    <li>Export Ready Packaging</li>
                    <li>Certified Processing</li>
                  </ul>
                </div>
                <div
                  className="d-flex flex-column gap-1 mb-3"
                  style={{ width: "fit-content" }}
                >
                  <p className="fw-bold">Applications</p>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Traditional Medicine
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Industrial Manufacturing
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Decorative items/Handicraft
                  </mark>
                </div>
                <Buttons text="Make a Request" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5  p-0 p-sm-5 p-md-0">
            <Col className="mb-5 mb-lg-0">
              <div>
                <h4>Cow Gallstones</h4>
                <p>
                  Pharmaceutical grade cow gallstones for traditional medicine
                  and research applications. Sourced and processed under strict
                  quality controls.
                </p>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="fw-bold">Specifications:</li>
                    <li>Pharmaceutical Grade</li>
                    <li>Lab Tested</li>
                    <li>Medical Applications</li>
                    <li>Quality Certified</li>
                  </ul>
                </div>
                <div
                  className="d-flex flex-column gap-1 mb-3"
                  style={{ width: "fit-content" }}
                >
                  <p className="fw-bold">Applications</p>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Traditional Chinese Medicine
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Pharmaceutical Research
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Medical Applications
                  </mark>
                </div>
                <Buttons text="Make a Request" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <img src={gall} alt="brown horn" className="img-fluid" />
            </Col>
          </Row>
          <Row className="mt-5 p-5">
            <Col sm={12} md={6}>
              <img src={hornss} alt="brown horn" className="img-fluid" />
            </Col>
            <Col>
              <div>
                <h4>Premium Cow Bones</h4>
                <p>
                  High-quality cow horns for manufacturing, crafts, and
                  traditional <br /> applications. Carefully processed and
                  graded for various industrial <br /> uses.
                </p>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="fw-bold">Specifications:</li>
                    <li>Industrial Grade</li>
                    <li>Multiple Applications</li>
                    <li>Bulk Available</li>
                    <li>Certified Processing</li>
                  </ul>
                </div>
                <div
                  className="d-flex flex-column gap-1 mb-3"
                  style={{ width: "fit-content" }}
                >
                  <p className="fw-bold">Applications</p>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Traditional Craft
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Industrial Application
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Bone Meal Production
                  </mark>
                </div>
                <Buttons text="Make a Request" />
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-5">
            <Col>
              <div>
                <h4>Premium Charcoal</h4>
                <p>
                  High-quality charcoal for industrial and domestic
                  applications. Sustainably produced with consistent burning
                  properties.
                </p>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="fw-bold">Specifications:</li>
                    <li>High Heat Output</li>
                    <li>Low Burning</li>
                    <li>Low Ash Content</li>
                    <li>Eco Friendly</li>
                  </ul>
                </div>
                <div
                  className="d-flex flex-column gap-1 mb-3"
                  style={{ width: "fit-content" }}
                >
                  <p className="fw-bold">Applications</p>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Industrial Heating
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Water Filtration
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    BBQ & Grilling
                  </mark>
                </div>
                <Buttons text="Make a Request" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <img src={charcoal} alt="brown horn" className="img-fluid" />
            </Col>
          </Row>
          <Row className="mt-5 pt-5">
            <Col sm={12} md={6}>
              <img src={leaves} alt="green leaves" className="img-fluid" />
            </Col>
            <Col>
              <div>
                <h4>Green Leaves</h4>
                <p>
                  Fresh and dried green leaves for herbal, pharmaceutical, and
                  traditional medicine industries. Carefully harvested and
                  processed.
                </p>
                <div className="mt-4">
                  <ul className="list-unstyled">
                    <li className="fw-bold">Specifications:</li>
                    <li>Fresh & Dried</li>
                    <li>Herbal Grade</li>
                    <li>Pharmaceutical Use</li>
                    <li>Organic Certified</li>
                  </ul>
                </div>
                <div
                  className="d-flex flex-column gap-1 mb-3"
                  style={{ width: "fit-content" }}
                >
                  <p className="fw-bold">Applications</p>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Traditional Medicine
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Tea Production
                  </mark>
                  <mark style={{ backgroundColor: "#C5C6E154" }}>
                    Herbal Supplements
                  </mark>
                </div>
                <Buttons text="Make a Request" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductSec1;

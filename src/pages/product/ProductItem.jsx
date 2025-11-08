import React from "react";
import { Col, Row } from "react-bootstrap";
import Buttons from "../../Components.jsx/Buttons";

const ProductItem = ({
  title,
  description,
  imageSrc,
  imageAlt,
  specifications,
  applications,
  reverse = false,
}) => {
  const textOrder = reverse ? "order-md-2" : "order-md-1";
  const imageOrder = reverse ? "order-md-1" : "order-md-2";

  return (
    <Row className="py-4 py-lg-5 align-items-center">
      <Col sm={12} md={6} className={`mb-4 mb-md-0 ${imageOrder}`}>
        <img src={imageSrc} alt={imageAlt} className="img-fluid rounded-3" />
      </Col>

      <Col sm={12} md={6} className={`${textOrder}`}>
        <div className="p-3 p-md-0">
          {" "}
          <h4 className="fw-bold fs-4 mb-3">{title}</h4>
          <p className="mb-4">{description}</p>
          <div className="mt-4">
            <ul className="list-unstyled">
              <li className="fw-bold mb-2">Specifications:</li>
              {specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <p className="fw-bold mb-2">Applications</p>
            <div className="d-flex flex-wrap gap-2">
              {applications.map((app, index) => (
                <mark
                  key={index}
                  style={{ backgroundColor: "#C5C6E154" }}
                  className="p-1 px-2 rounded-2 text-dark"
                >
                  {app}
                </mark>
              ))}
            </div>
          </div>
          <Buttons text="Make a Request" />
        </div>
      </Col>
    </Row>
  );
};

export default ProductItem;

import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem"; // Import the new component
import horn from "../../images/premiumhorn.png";
import gall from "../../images/gallstones.png";
import hornss from "../../images/hornss.png";
import leaves from "../../images/leaves.png";
import charcoal from "../../images/charcoal.png";

const ProductSec1 = () => {
  const products = [
    {
      title: "Premium Cow Horns",
      description:
        "High-quality cow horns for manufacturing, crafts, and traditional applications. Carefully processed and graded for various industrial uses.",
      imageSrc: horn,
      imageAlt: "brown cow horn",
      specifications: [
        "Grade A Quality",
        "Various sizes",
        "Export Ready Packaging",
        "Certified Processing",
      ],
      applications: [
        "Traditional Medicine",
        "Industrial Manufacturing",
        "Decorative items/Handicraft",
      ],
      reverse: false,
    },
    {
      title: "Cow Gallstones",
      description:
        "Pharmaceutical grade cow gallstones for traditional medicine and research applications. Sourced and processed under strict quality controls.",
      imageSrc: gall,
      imageAlt: "cow gallstones",
      specifications: [
        "Pharmaceutical Grade",
        "Lab Tested",
        "Medical Applications",
        "Quality Certified",
      ],
      applications: [
        "Traditional Chinese Medicine",
        "Pharmaceutical Research",
        "Medical Applications",
      ],
      reverse: true,
    },
    {
      title: "Premium Cow Bones",
      description:
        "High-quality cow bones for manufacturing, crafts, and traditional applications. Carefully processed and graded for various industrial uses.",
      imageSrc: hornss,
      imageAlt: "cow bones",
      specifications: [
        "Industrial Grade",
        "Multiple Applications",
        "Bulk Available",
        "Certified Processing",
      ],
      applications: [
        "Traditional Craft",
        "Industrial Application",
        "Bone Meal Production",
      ],
      reverse: false,
    },
    {
      title: "Premium Charcoal",
      description:
        "High-quality charcoal for industrial and domestic applications. Sustainably produced with consistent burning properties.",
      imageSrc: charcoal,
      imageAlt: "premium charcoal",
      specifications: [
        "High Heat Output",
        "Low Burning",
        "Low Ash Content",
        "Eco Friendly",
      ],
      applications: [
        "Industrial Heating",
        "Water Filtration",
        "BBQ & Grilling",
      ],
      reverse: true,
    },
    {
      title: "Green Leaves",
      description:
        "Fresh and dried green leaves for herbal, pharmaceutical, and traditional medicine industries. Carefully harvested and processed.",
      imageSrc: leaves,
      imageAlt: "green leaves",
      specifications: [
        "Fresh & Dried",
        "Herbal Grade",
        "Pharmaceutical Use",
        "Organic Certified",
      ],
      applications: [
        "Traditional Medicine",
        "Tea Production",
        "Herbal Supplements",
      ],
      reverse: false,
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#D9D9D93D" }}>
        <Container className="py-5">
          <Row className="text-center mb-4 mb-lg-5">
            <h1 className="fw-bold fs-1">Our Products</h1>

            <p className="fs-5 px-lg-5 mx-lg-5">
              Discover our comprehensive range of natural products, each
              carefully sourced and processed to meet international quality
              standards.
            </p>
          </Row>

            {products.map((product, index) => (
            <ProductItem
              key={index}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              specifications={product.specifications}
              applications={product.applications}
              reverse={product.reverse}
            />
          ))}
        </Container>
      </div>
    </>
  );
};

export default ProductSec1;

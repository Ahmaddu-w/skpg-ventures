import React from "react";
import Header from "../../Components.jsx/Header";
import Bann from "../../Components.jsx/Bann";
import liver from "../../images/liverBan.png";
import ProductSec1 from "./ProductSec1";
import Journey from "../../Components.jsx/Journey";
import Footer from "../../Components.jsx/Footer";

const Products = () => {
  return (
    <>
      <Header />
      <Bann imageImport={liver} always="Our Products" />
      <ProductSec1 />
      <Journey />
      <Footer />
    </>
  );
};

export default Products;

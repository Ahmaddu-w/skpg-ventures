import React from "react";
import Header from "../../Components.jsx/Header";
import Banner from "../Banner";
import Section1 from "./Section1";
import Products from "./Products";
import ChooseUs from "../../Components.jsx/ChooseUs";
import RequestSec from "./RequestSec";
import Footer from "../../Components.jsx/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner
        text="Premium Natural
Products"
        text1="Leading international export company specializing in cow horns, 
gallstones, bones, charcoal, and green leaves. Quality natural products 
for global markets with sustainable sourcing."
      />
      <Section1 />
      <Products />
      <ChooseUs />
      <RequestSec />
      <Footer />
    </>
  );
};

export default Homepage;

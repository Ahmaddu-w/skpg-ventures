import React from "react";
import Header from "../../Components.jsx/Header";
import Bann from "../../Components.jsx/Bann";
import BelowBanner from "./BelowBanner";
import BelowBanner2 from "./BelowBanner2";
import Journey from "../../Components.jsx/Journey";
import Footer from "../../Components.jsx/Footer";
import bannn from "../../images/liverBan.png";
import Choose from "./Choose";

const About = () => {
  return (
    <>
      <Header />
      <Bann imageImport={bannn} always="About Us" />
      <BelowBanner />
      <Choose />
      <BelowBanner2 />
      <Journey />
      <Footer />
    </>
  );
};

export default About;

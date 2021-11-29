import React from "react";
// import Header from "@components/common/header";
import TopBg from "./src/components/TopBg";
import AboutAstro from "./src/components/AboutAstro";
import BuildStation from "./src/components/BuildStation";
import Launch from "./src/components/Launch";
import Logistics from "./src/components/Logistics";
import Service from "./src/components/Service";
import Vision from "./src/components/Vision";
import Partner from "./src/components/Partner";
// import Footer from "./src/components/Footer";
import "./index.scss";

const IndexPage: React.FC = (props) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <TopBg />
      <AboutAstro />
      <BuildStation />
      <Launch />
      <Logistics />
      <Service />
      <Vision />
      <Partner />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default IndexPage;

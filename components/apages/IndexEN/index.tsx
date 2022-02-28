import React from "react";


import TopBg from "./src/components/TopBg";
import AboutAstro from "./src/components/AboutAstro";
import BuildStation from "./src/components/BuildStation";
import Launch from "./src/components/Launch";
import Logistics from "./src/components/Logistics";
import Service from "./src/components/Service";
import Vision from "./src/components/Vision";
import Partner from "./src/components/Partner";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const IndexPage: React.FC<any> = (props) => {

    const {locale} = props;
    return (
        <React.Fragment>
            <Header locale={locale}/>
            <TopBg/>
            <AboutAstro/>
            <BuildStation/>
            <Launch/>
            <Logistics/>
            <Service/>
            <Vision/>
            <Partner/>
            <Footer locale={locale}/>
        </React.Fragment>
    );
};

export default IndexPage;

import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const Partner: React.FC = () => {
  return (
    <div className="partner">
      <Title size={34}>合作伙伴</Title>
      <div className="partner-box">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Partner;

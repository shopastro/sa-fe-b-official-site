import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const Partner: React.FC = () => {
  return (
    <div className="partner">
      <Title size={34}>合作伙伴</Title>
      <div className="partner-box">
        <div className="item google"></div>
        <div className="item strip"></div>
        <div className="item paypal"></div>
        <div className="item lianlian"></div>
        <div className="item qh"></div>
        <div className="item logo-4px"></div>
        <div className="item joying-box"></div>
        <div className="item meetsocial-group"></div>
        <div className="item cmt"></div>
        <div className="item bluefocus"></div>
      </div>
    </div>
  );
};

export default Partner;

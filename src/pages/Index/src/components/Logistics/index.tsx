import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const BuildStation: React.FC = () => {
  return (
    <div className="logistics">
      <div className="logistics-box">
        <div className="logistics-left"></div>
        <div className="logistics-right">
          <div className="right-title">
            <Title>贴心、细致、周到</Title>
          </div>
          <div className="right-slogan">省钱省心的 物流支付方案</div>
          <div className="right-desc">
            多支付渠道服务，安全快捷！ 差异化的物流解决方案，保障买家所需!
          </div>
        </div>
      </div>
      <div className="circle-logistics" />
      <div className="rectangle-logistics" />
    </div>
  );
};

export default BuildStation;

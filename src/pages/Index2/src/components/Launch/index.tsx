import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const Launch: React.FC = () => {
  return (
    <div className="launch">
      <div className="launch-left"></div>
      <div className="launch-right">
        <div className="right-title">
          <Title>转化率提升200%</Title>
        </div>
        <div className="right-slogan">多样化精准投放</div>
        <div className="right-desc">
          贴合本地买家的多渠道广告+社交投放， 精准转化、效率翻倍！
        </div>
      </div>

      <div className="circle-launch" />
    </div>
  );
};

export default Launch;

import React from "react";
import "./index.scss";
import { Button } from "@components/common";
import Title from "@components/common/Title";

const TopBg: React.FC = () => {
  return (
    <div className="banner">
      <div className="ball"></div>
      <div className="rectangle"></div>
      <div className="ball-small"></div>
      <div className="banner-content">
        <div className="content-left">
          <div className="left-title">
            <Title>出海首选 星盘跨境</Title>
          </div>
          <div className="left-slogan">货品您搞定 出海我搞定</div>
          <div className="left-sub-title">
            「一站式」跨境电商服务平台， 跨境卖家的出海首选！
          </div>
          <Button className="try-now">立即试用</Button>
        </div>
        <div className="content-right" />
      </div>
    </div>
  );
};

export default TopBg;

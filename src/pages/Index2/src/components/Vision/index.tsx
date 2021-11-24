import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const Vision: React.FC = () => {
  return (
    <div className="vision">
      {/* <div className="circle-launch" /> */}
      <div className="vision-main">
        <div className="vision-slogan">
          <Title>星盘 shopastro</Title>
        </div>
        <div className="vison-title">懂中国卖家，更懂海外买家</div>
        <div className="vison-sub-title">
          我们的愿景是：让中国跨境卖家享受更好的商业服务
        </div>
      </div>
      <div className="vision-feature">
        <div className="feature-card">
          <div className="feature-img feature-img-1"></div>
          <div className="feature-title">7x24热线客服</div>
        </div>
        <div className="feature-card">
          <div className="feature-img   feature-img-2"></div>
          <div className="feature-title">1对1专属生意顾问</div>
        </div>
        <div className="feature-card">
          <div className="feature-img  feature-img-3"></div>
          <div className="feature-title">强大易用贴心的管理后台</div>
        </div>
        <div className="feature-card">
          <div className="feature-img  feature-img-4"></div>
          <div className="feature-title">高可用性，安全健壮的系统</div>
        </div>
      </div>

      <div className="circle-vision" />
    </div>
  );
};

export default Vision;

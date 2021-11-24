import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const Service: React.FC = () => {
  return (
    <div className="service">
      <div className="service-left"></div>
      <div className="service-right">
        <div className="right-title">
          <Title>全方位智能优化</Title>
        </div>
        <div className="right-slogan">
          事半功倍的管理工具 贴心专业的专人服务
        </div>
        <div className="right-desc">
          多店铺、CRM、全渠道投放、智能决策等，好工具要好用；
          专业的服务和运营团队，将陪伴守护您的跨境之路！
        </div>
      </div>

      {/* <div className="circle-launch" /> */}
    </div>
  );
};

export default Service;

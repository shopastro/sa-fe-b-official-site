import React from "react";
import Button from "../Button";

import "./index.scss";

const IndexPage: React.FC = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="header-logo"></div>
        <div className="header-nav">
          <div className="nav-btn nav-home">首页</div>
          <div className="nav-btn">关于shopastro</div>
          <div className="nav-btn">加入我们</div>

          <Button className="nav-btn content-us-btn">联系我们</Button>
        </div>
        <div className="menu-icon">
          
        </div>
      </div>

    </div>
  );
};

export default IndexPage;

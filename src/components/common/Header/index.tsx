import React, { useState } from "react";
import Button from "../Button";
import "./index.scss";

const IndexPage: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="header"
      style={{
        overflow: showMenu ? "visible" : "hidden",
      }}
    >
      <div className="header-box">
        <div className="header-logo"></div>
        {showMenu && (
          <div
            className="nav-mask"
            onClick={() => setShowMenu(!showMenu)}
          ></div>
        )}

        <div
          className={`header-nav ${showMenu && "show-menu"}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="nav-logo">
            <div className="nav-logo-overlay"></div>
          </div>
          <div className="nav-btn nav-home">首页</div>
          <div className="nav-btn">关于shopastro</div>
          <div
            className="nav-btn"
            onClick={() => {
              window.scrollTo({
                top: 10000,
                behavior: "smooth",
              });
            }}
          >
            加入我们
          </div>

          <Button className="nav-btn content-us-btn">联系我们</Button>

          <div
            className="nav-close"
            onClick={() => setShowMenu(!showMenu)}
          ></div>
        </div>
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}></div>
      </div>
    </div>
  );
};

export default IndexPage;

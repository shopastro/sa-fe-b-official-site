import React from "react";
import Title from "@components/common/Title";
import "./index.scss";

const BuildStation: React.FC = () => {
  return (
    <div className="build-station">
      <div className="station-box">
        <div className="station-left"></div>
        <div className="station-right">
          <div className="right-title">
            <Title>方便快捷</Title>
          </div>
          <div className="right-slogan">无门槛建站</div>
          <div className="right-desc">
            无需再为多到花眼的模版选择而烦恼, 点点就好！
          </div>
        </div>
      </div>
      <div className="circle-station" />
    </div>
  );
};

export default BuildStation;

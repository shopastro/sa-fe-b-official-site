import React from "react";
import "./index.scss";
import Title from "@components/common/Title";

const Vision: React.FC = () => {
  return (
    <div className="home-footer">
      <div className="footer-box">
        <div className="footer-left">
          <div className="footer-logo"></div>
          <div className="footer-qr">
            <div className="qr-img"></div>
            <div className="qr-desc">shopastro官方公众号</div>

            <div className="copy-right">
              ©2021 shopastro.com Rights Reserved｜浙ICP备123456号-00
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="right-cell">
            <Title size={14}>
              <div>
                <div className="item-title">About us </div>
                <div className="item-title">关于我们</div>
              </div>
            </Title>
            <div className="item">隐私政策</div>
            <div className="item">用户协议</div>
          </div>
          <div className="right-cell">
            <Title size={14}>
              <div>
                <div className="item-title">Join us</div>
                <div className="item-title">加入我们</div>
              </div>
            </Title>
            <div className="item">在招岗位</div>
            <div className="item">投递简历</div>
          </div>
          <div className="right-cell">
            <Title size={14}>
              <div>
                <div className="item-title">Contact us</div>
                <div className="item-title">联系我们</div>
              </div>
            </Title>
            <div className="item">12345678</div>
            <div className="item">shopastro@shopastro-inc.com</div>
            <div className="item">杭州市余杭区时代未来城5号楼1702室</div>
          </div>

          <div className="right-cell right-cell-mb">
            <div className="copy-right">
              ©2021 shopastro.com Rights Reserved｜浙ICP备123456号-00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

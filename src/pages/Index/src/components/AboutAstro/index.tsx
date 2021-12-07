import React from "react";

import "./index.scss";

const AboutAstro: React.FC = () => {
  return (
    <div className="about-astro">
      <div className="about-decoration"></div>
      <div className="about-astro-content">
        <div className="about-title">关于 shopastro</div>
        <div className="about-slogan">
          帮助跨境卖家一站式出海，让获客、交易、支付、物流、客户管理轻松简单
        </div>

        <div className="about-feature">
          <div className="decoration"></div>
          <div className="about-cell">
            <div className="feature-logo get-customer"></div>
            <div className="feature-title">获客</div>
            <div className="feature-desc">
              洞察全球买家， <br/>建站、投放，轻松简单
            </div>
          </div>
          <div className="about-cell">
            <div className="feature-logo trading"></div>
            <div className="feature-title">交易</div>
            <div className="feature-desc">
              本地化买家体验， <br/>移动下单，随时随地
            </div>
          </div>
          <div className="about-cell">
            <div className="feature-logo protection"></div>
            <div className="feature-title">保障</div>
            <div className="feature-desc">
              多支付渠道，差异化物流， <br/>安全快捷，省钱省心
            </div>
          </div>
          <div className="about-cell">
            <div className="feature-logo manager"></div>
            <div className="feature-title">管理</div>
            <div className="feature-desc">
              多店铺、CRM、全渠道投放，<br/>好工具，让管理事半功倍
            </div>
          </div>
        </div>
      </div>

      <div className="about-circle"></div>
    </div>
  );
};

export default AboutAstro;

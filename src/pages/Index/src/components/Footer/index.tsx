import React, { useState } from "react";
import "./index.scss";
import Title from "@components/common/Title";
import Policy from "../Policy/Policy";
import Agreement from "../Policy/Agreement";

type Docs = {
  policy: "init" | "show" | "hide";
  agreement: "init" | "show" | "hide";
};

const Vision: React.FC = () => {
  const [close, setClose] = useState({
    about: true,
    join: true,
    content: true,
  });

  const [docs, setDocs] = useState<Docs>({
    policy: "init",
    agreement: "init",
  });

  return (
    <div className="home-footer" id="homeFooter">
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
                <div className="item-title">aaa us </div>
                <div className="item-title">关于我们</div>
              </div>

              <i className={`add ${close.about && "line"}`} />
            </Title>
            <div className={`${close.about ? "opened" : "closeed"}`}>
              <div
                className="item"
                onClick={() => {
                  setDocs({
                    ...docs,
                    policy: docs.policy === "show" ? "hide" : "show",
                  });
                }}
              >
                隐私政策
              </div>
              <div
                className="item"
                onClick={() => {
                  setDocs({
                    ...docs,
                    agreement: docs.agreement === "show" ? "hide" : "show",
                  });
                }}
              >
                用户协议
              </div>
            </div>
          </div>
          <div className="right-cell">
            <Title
              size={14}
              onClick={() =>
                setClose({
                  ...close,
                  join: !close.join,
                })
              }
            >
              <div>
                <div className="item-title">Join us</div>
                <div className="item-title">加入我们</div>
              </div>
              <i className={`add ${close.join && "line"}`} />
            </Title>

            <div className={`${close.join ? "opened" : "closeed"}`}>
              <a
                className="item"
                href="https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html"
                rel="noreferrer"
                target="_blank"
              >
                在招岗位
              </a>
              <a
                className="item"
                href="https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html"
                rel="noreferrer"
                target="_blank"
              >
                投递简历
              </a>
            </div>
          </div>
          <div className="right-cell">
            <Title
              size={14}
              onClick={() =>
                setClose({
                  ...close,
                  content: !close.content,
                })
              }
            >
              <div>
                <div className="item-title">Contact us</div>
                <div className="item-title">联系我们</div>
              </div>

              <i className={`add ${close.content && "line"}`} />
            </Title>
            <div className={`${close.content ? "opened" : "closeed"}`}>
              <a
                className="item"
                href="mailto:shopastro@shopastro-inc.com"
                target="_blank"
                rel="noreferrer"
              >
                shopastro@shopastro-inc.com
              </a>
              <div className="item">杭州市余杭区时代未来城5号楼1702室</div>
            </div>
          </div>

          <div className="right-cell right-cell-mb">
            <div className="copy-right">
              ©2021 shopastro.com Rights Reserved｜浙ICP备123456号-00
            </div>
          </div>
        </div>
      </div>

      {docs.policy !== "init" && <Policy state={docs.policy} />}

      {docs.agreement !== "init" && <Agreement state={docs.agreement} />}
    </div>
  );
};

export default Vision;

import React, { useState, useMemo } from "react";
import "./index.scss";
import Title from "@components/common/Title";
// import Policy from "../Policy/Policy";
// import Agreement from "../Policy/Agreement";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { local } from "./local";

const Vision: React.FC = (props) => {
  const [close, setClose] = useState({
    about: true,
    join: true,
    content: true,
  });

  const { location = {}, history } = props;
  const { pathname } = location;

  // const [docs, setDocs] = useState<Docs>({
  //   policy: "init",
  //   agreement: "init",
  // });

  const lang = useMemo(() => {
    if (pathname.toLocaleLowerCase().indexOf("zh-cn") > -1) {
      return "zh-CN";
    } else {
      return "en-US";
    }
  }, [pathname]);

  const getLocal = (key: string) => {
    return local?.[key]?.[lang];
  };

  return (
    <div className="home-footer" id="homeFooter">
      <div className="footer-box">
        <div className="footer-left">
          <div className="footer-logo"></div>
          <div className="footer-qr">
            <div className="qr-img"></div>
            <div className="qr-desc">{getLocal("qrTencent")}</div>

            <div className="copy-right">
              ©2021 shopastro.com Rights Reserved｜浙ICP备123456号-00
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="right-cell">
            <Title
              size={14}
              onClick={() =>
                setClose({
                  ...close,
                  about: !close.about,
                })
              }
            >
              <div>
                <div className="item-title">{getLocal("aboutUs")}</div>
              </div>

              <i className={`add ${close.about && "line"}`} />
            </Title>
            <div className={`${close.about ? "opened" : "closeed"}`}>
              <Link className="item" to="/policy/zh_CN">
                {getLocal("privacy")}
              </Link>
              <Link className="item" to="/agreement/zh_CN">
                {getLocal("terms")}
              </Link>
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
                <div className="item-title">{getLocal("joinUs")}</div>
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
                {getLocal("careers")}
              </a>
              <a
                className="item"
                href="https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html"
                rel="noreferrer"
                target="_blank"
              >
                {getLocal("sendYourResume")}
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
                <div className="item-title">{getLocal("contactUs")} </div>
              </div>

              <i className={`add ${close.content && "line"}`} />
            </Title>
            <div className={`${close.content ? "opened" : "closeed"}`}>
              <a
                className="item"
                href="mailto:hr@shopastro-inc.com"
                target="_blank"
                rel="noreferrer"
              >
                hr@shopastro-inc.com
              </a>
              <div className="item">{getLocal("address")}</div>
            </div>
          </div>

          <div className="right-cell right-cell-mb">
            <div className="copy-right">
              ©2021 shopastro.com Rights Reserved｜浙ICP备123456号-00
            </div>
          </div>
        </div>
      </div>

      {/* {docs.policy !== "init" && <Policy state={docs.policy} />}

      {docs.agreement !== "init" && <Agreement state={docs.agreement} />} */}
    </div>
  );
};

export default withRouter(Vision);

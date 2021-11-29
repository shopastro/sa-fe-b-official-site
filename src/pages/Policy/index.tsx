import React, { useEffect, useState } from "react";
import { policy, agreement } from "./const";
import "./index.scss";

type IProps = {
  state: "init" | "show" | "hide";
};

const IndexPage: React.FC<IProps> = (props) => {
  const { location } = props;
  const { pathname } = location;
  // const [lang, setLang] = useState("");
  // useEffect(() => {
  //   console.log("🚀 ~ file: index.tsx ~ line 12 ~ pathname", pathname);
  //   if (pathname.toLocaleLowerCase().indexOf("zh-cn") > -1) {
  //     setLang("/zh-CN");
  //   } else {
  //     setLang("");
  //   }
  // }, [pathname]);

  return (
    <div className="policy-container">
      <div className="pg-viewer-wrapper">
        <div className="pg-viewer" id="pg-viewer">
          <div id="docx">
            <div
              className="document-container"
              dangerouslySetInnerHTML={{
                __html: pathname.indexOf("policy") > -1 ? policy : agreement,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

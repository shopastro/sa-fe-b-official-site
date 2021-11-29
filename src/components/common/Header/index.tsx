import React, { useState, useEffect, Fragment } from "react";
import Button from "../Button";
import "./index.scss";
import { withRouter } from "react-router-dom";

const IndexPage: React.FC = (props) => {
  const { location = {}, history } = props;
  const { pathname } = location;
  const [showMenu, setShowMenu] = useState(false);
  const [isPc, setIsPc] = useState(true);
  // const [lang, setLang] = useState("");
  const [isPolicy, setIsPolicy] = useState(false);

  const getIsPolicy = () => {
    if (
      pathname.toLocaleLowerCase().indexOf("policy") > -1 ||
      pathname.toLocaleLowerCase().indexOf("agreement") > -1
    ) {
      setIsPolicy(true);
    } else {
      setIsPolicy(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowMenu(false);
    getIsPolicy();
  }, [pathname]);

  const handleResize = () => {
    if (document.body.clientWidth < 770) {
      setIsPc(false);
    } else {
      setIsPc(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.addEventListener("resize", () => {});
    };
  }, []);

  const getLang = () => pathname.toLocaleLowerCase().indexOf("zh-cn") > -1;

  return (
    <div
      className="header"
      // style={{
      //   overflow: showMenu ? "visible" : "hidden",
      // }}
    >
      <div className="header-box">
        <div
          className="header-logo"
          onClick={() => {
            history.push("/");
          }}
        />
        {showMenu && (
          <div
            className="nav-mask"
            onClick={() => setShowMenu(!showMenu)}
          ></div>
        )}

        <div className={`header-nav ${showMenu && "show-menu"}`}>
          <div className="nav-logo">
            <div className="nav-logo-overlay"></div>
          </div>
          {!isPolicy && (
            <Fragment>
              <div
                className="nav-btn nav-home"
                onClick={() => {
                  if (pathname === "/") {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  } else {
                    history.push("/");
                  }

                  !isPc && setShowMenu(!showMenu);
                }}
              >
                首页
              </div>

              {pathname === "/" && (
                <div
                  className="nav-btn about-nav-btn"
                  onClick={() => {
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementPosition = document
                      .querySelector(".about-astro-content")
                      .getBoundingClientRect().top;
                    const offsetPosition = elementPosition - bodyRect - 160;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    !isPc && setShowMenu(!showMenu);
                  }}
                >
                  关于shopastro
                </div>
              )}

              <div
                className="nav-btn"
                onClick={() => {
                  window.scrollTo({
                    top: 10000,
                    behavior: "smooth",
                  });
                  !isPc && setShowMenu(!showMenu);
                }}
              >
                加入我们
              </div>

              <div
                className="nav-btn  content-us-btn-for-mb"
                onClick={() => {
                  window.scrollTo({
                    top: 10000,
                    behavior: "smooth",
                  });
                  !isPc && setShowMenu(!showMenu);
                }}
              >
                联系我们
              </div>

              <Button
                className="nav-btn content-us-btn"
                onClick={() => {
                  window.scrollTo({
                    top: 10000,
                    behavior: "smooth",
                  });
                  !isPc && setShowMenu(!showMenu);
                }}
              >
                联系我们
              </Button>

              <Button className="nav-btn try-now">立即试用</Button>
            </Fragment>
          )}

          {isPolicy && (
            <div className="local">
              {getLang() ? "中文" : "English"}
              <div
                className="lang"
                onClick={() => {
                  if (getLang()) {
                    // setLang("");
                    history.push(pathname.replace('/zh-CN', ''));
                  } else {
                    // setLang("/zh-CN");
                    history.push(`${pathname}/zh-CN`);
                  }
                }}
              >
                {getLang() ? "English" : "中文"}
              </div>
            </div>
          )}

          <div
            className="nav-close"
            onClick={() => !isPc && setShowMenu(!showMenu)}
          ></div>
        </div>
        <div
          className="menu-icon"
          onClick={() => !isPc && setShowMenu(!showMenu)}
        ></div>
      </div>
    </div>
  );
};

export default withRouter(IndexPage);

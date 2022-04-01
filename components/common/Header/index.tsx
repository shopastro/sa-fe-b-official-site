import React, {useState, useEffect, Fragment, useMemo} from "react";
import Button from "../Button";
import styles from "./index.module.scss";
import {local} from "./local";
import {withRouter} from "next/router";
import classNames from "classnames";
import Link from 'next/link'

const IndexPage: React.FC<any> = (props) => {

    const {locale = 'zh-CN', showMenuData = true} = props;
    // const { location = {}, history } = props;
    const [showMenu, setShowMenu] = useState(false);
    const [isPc, setIsPc] = useState(true);
    // const [lang, setLang] = useState("");
    const [isPolicy, setIsPolicy] = useState(false);
    const getIsPolicy = () => {
        // if (
        //   pathname.toLocaleLowerCase().indexOf("policy") > -1 ||
        //   pathname.toLocaleLowerCase().indexOf("agreement") > -1
        // ) {
        //   setIsPolicy(true);
        // } else {
        //   setIsPolicy(false);
        // }
    };

    // useEffect(() => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    //   setShowMenu(false);
    //   getIsPolicy();
    // }, [pathname]);

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
            window.addEventListener("resize", () => {
            });
        };
    }, []);

    // const lang = useMemo(() => {
    //   const browserLocale = navigator.language;
    //   let locale = 'en-US';
    //   if(browserLocale && browserLocale.indexOf('zh-')>=0){
    //     // Chinese
    //     locale = 'zh-CN';
    //   }
    //   return locale;
    //
    // }, []);
    const getLocal = (key: string) => {
        return local?.[key]?.[locale];
        // return 'HEADER TEST'
    };


    let menuDataComp = null;
    if(showMenuData){
        menuDataComp = (
            <div className={classNames(styles['header-nav'], styles[`${showMenu && "show-menu"}`])}>
                <div className={styles["nav-logo"]}>
                    <div className={styles["nav-logo-overlay"]}></div>
                </div>

                <Fragment>
                    {/*<div*/}
                    {/*    className={classNames(styles["nav-btn"], styles["nav-home"])}*/}
                    {/*    onClick={() => {*/}
                    {/*        // if (pathname === "/") {*/}
                    {/*        //   window.scrollTo({*/}
                    {/*        //     top: 0,*/}
                    {/*        //     behavior: "smooth",*/}
                    {/*        //   });*/}
                    {/*        // } else {*/}
                    {/*        //   history.push("/");*/}
                    {/*        // }*/}
                    {/*        //*/}
                    {/*        // !isPc && setShowMenu(!showMenu);*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {getLocal('index')}*/}
                    {/*</div>*/}

                    {/*{pathname === "/" && (*/}
                    {/*  <div*/}
                    {/*    className={styles["nav-btn about-nav-btn"]}*/}
                    {/*    onClick={() => {*/}
                    {/*      const bodyRect = document.body.getBoundingClientRect().top;*/}
                    {/*      const elementPosition = document*/}
                    {/*        .querySelector(".about-astro-content")*/}
                    {/*        .getBoundingClientRect().top;*/}
                    {/*      const offsetPosition = elementPosition - bodyRect - 160;*/}

                    {/*      window.scrollTo({*/}
                    {/*        top: offsetPosition,*/}
                    {/*        behavior: "smooth",*/}
                    {/*      });*/}
                    {/*      !isPc && setShowMenu(!showMenu);*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    {getLocal('aboutUs')}*/}
                    {/*  </div>*/}
                    {/*)}*/}

                    <div
                        className={styles["nav-btn"]}
                        onClick={() => {
                            window.scrollTo({
                                top: 10000,
                                behavior: "smooth",
                            });
                            !isPc && setShowMenu(!showMenu);
                        }}
                    >
                        {getLocal('joinUs')}
                    </div>

                    <div
                        className={classNames(styles["nav-btn"], styles["content-us-btn-for-mb"])}
                        onClick={() => {
                            window.scrollTo({
                                top: 10000,
                                behavior: "smooth",
                            });
                            !isPc && setShowMenu(!showMenu);
                        }}
                    >
                        {getLocal('contactUs')}
                    </div>

                    <Button
                        className={classNames(styles["nav-btn"], styles["content-us-btn"])}
                        onClick={() => {
                            window.scrollTo({
                                top: 10000,
                                behavior: "smooth",
                            });
                            !isPc && setShowMenu(!showMenu);
                        }}
                    >
                        {getLocal('contactUs')}
                    </Button>

                    <Button className={classNames(styles["nav-btn"], styles["try-now"])}><a
                        href="mailto:shopastro@shopastro-inc.com">{getLocal('tryBtn')}</a></Button>
                </Fragment>

                {/*{isPolicy && (*/}
                {/*  <div className={styles["local"]}>*/}
                {/*    {getLang() ? "中文" : "English"}*/}
                {/*    <div*/}
                {/*      className={styles["lang"]}*/}
                {/*      onClick={() => {*/}
                {/*        if (getLang()) {*/}
                {/*          // setLang("");*/}
                {/*          history.push(pathname.replace('/zh-CN', ''));*/}
                {/*        } else {*/}
                {/*          // setLang("/zh-CN");*/}
                {/*          history.push(`${pathname}/zh-CN`);*/}
                {/*        }*/}
                {/*      }}*/}
                {/*    >*/}
                {/*      {getLang() ? "English" : "中文"}*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*)}*/}
                <div
                    className={styles["nav-close"]}
                    onClick={() => !isPc && setShowMenu(!showMenu)}
                ></div>
            </div>
        )
    }
    return (
        <div
            className={styles["header"]}
            style={{
                overflow: showMenu ? "visible" : "hidden",
            }}
        >
            <div className={styles["header-box"]}>
                <Link href={getLocal('homeLink')}>
                    <div
                        className={styles["header-logo"]}
                    />
                </Link>

                {showMenu && (
                    <div
                        className={styles["nav-mask"]}
                        onClick={() => setShowMenu(!showMenu)}
                    ></div>
                )}

                {menuDataComp}
                {/*<div*/}
                {/*    className={styles["menu-icon"]}*/}
                {/*    onClick={() => !isPc && setShowMenu(!showMenu)}*/}
                {/*></div>*/}
            </div>
        </div>
    );
};

export default withRouter(IndexPage);

import React, {useState, useMemo} from "react";
import styles from "./index.module.scss";
import Title from "../../common/Title";
import Link from 'next/link'
import {local} from "./local";
import {withRouter} from "next/router";
import classNames from "classnames";

const Vision: React.FC<any> = (props) => {

    const {locale = "zh-CN"} = props;
    const [close, setClose] = useState({
        about: true,
        join: true,
        contact: true,
    });

    // const [docs, setDocs] = useState<Docs>({
    //   policy: "init",
    //   agreement: "init",
    // });

    // const lang = useMemo(() => {
    //   if (pathname.toLocaleLowerCase().indexOf("zh-cn") > -1) {
    //     return "en-US";
    //   } else {
    //     return "zh-CN";
    //   }
    // }, [pathname]);


    const getLocal = (key: string) => {

        if (!local) {
            return ''
        } else {
            return local[key]?.[locale];
        }
    };

    const currentYear = new Date().getFullYear().toString();
    const copyrightText = `©${currentYear} shopastro All Rights Reserved.`;

    const icpInfoComp = (<div className={styles["icp-info"]}><a className={styles['i-content']} rel="noreferrer" href="http://beian.miit.gov.cn/"
                                                                target='_blank'>浙ICP备2021036268号-1</a></div>)

    const gaInfoComp = (<div className={classNames(styles["icp-info"],styles['police'])}><a className={styles['i-content']} rel="noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016170"
                                                               target='_blank'>浙公网安备 33011002016170号</a></div>)

    return (
        <div className={styles["home-footer"]} id="homeFooter">
            <div className={styles["footer-box"]}>
                <div className={styles["footer-left"]}>
                    <div className={styles["footer-logo"]}></div>
                    <div className={styles["footer-qr"]}>
                        <div className={styles["qr-img"]}></div>
                        <div className={styles["qr-desc"]}>{getLocal("qrTencent")}</div>
                    </div>
                </div>
                <div className={styles["footer-right"]}>
                    <div className={classNames(styles["right-cell"])}>
                        <div className={styles["footer-title-width-slash"]}>
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
                                    <div className={styles['footer-item-title']}>{getLocal("aboutUs")}</div>
                                </div>
                                <i className={classNames(styles["i-add"], styles[`${close.about && "i-line"}`])}/>
                            </Title>
                        </div>
                        <div className={styles[`${close.about ? "opened" : "closeed"}`]}>
                            <div className={styles["item"]}>
                                <Link href={getLocal("privacyLink")}>
                                    {getLocal("privacy")}
                                </Link>
                            </div>
                            <div className={styles["item"]}>
                                <Link href={getLocal("termsLink")}>
                                    {getLocal("terms")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles["right-cell"])}>
                      <div className={styles["footer-title-width-slash"]}>
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
                                <div className={styles['footer-item-title']}>{getLocal("joinUs")}</div>
                            </div>
                            <i className={classNames(styles["i-add"], styles[`${close.join && "i-line"}`])}/>
                        </Title>
                      </div>
                        <div className={styles[`${close.join ? "opened" : "closeed"}`]}>
                            <a
                                className={styles["item"]}
                                href="https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html"
                                rel="noreferrer"
                                target="_blank"
                            >
                                {getLocal("careers")}
                            </a>
                            <a
                                className={styles["item"]}
                                href="https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html"
                                rel="noreferrer"
                                target="_blank"
                            >
                                {getLocal("sendYourResume")}
                            </a>
                        </div>
                    </div>
                    <div className={classNames(styles["right-cell"])}>
                      <div className={styles["footer-title-width-slash"]}>
                      <Title
                            size={14}
                            onClick={() => {
                                setClose({
                                    ...close,
                                    contact: !close.contact,
                                })
                            }}
                        >
                            <div className={styles['footer-item-title']}>
                                <div className={styles["item-title"]}>{getLocal("contactUs")} </div>
                            </div>

                            <i className={classNames(styles["i-add"], styles[`${close.contact && "i-line"}`])}/>
                        </Title>
                      </div>
                        <div className={styles[`${close.contact ? "opened" : "closeed"}`]}>
                            <a
                                className={styles["item"]}
                                href="mailto:contact@shopastro.com"
                                target="_blank"
                                rel="noreferrer"
                            >contact@shopastro.com
                            </a>
                            <div className={styles["item"]}>{getLocal("address")}</div>
                        </div>
                    </div>
                    <div
                        className={classNames(styles["right-cell"], styles["footer-title-width-slash"], styles["right-cell-mb"])}>
                        <div className={styles["copy-right"]}>
                            {copyrightText}<br/>{icpInfoComp}&nbsp;&nbsp;{gaInfoComp}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["pc-bottom-area"]}>
                <div className={styles["copy-right"]}>
                    {copyrightText}&nbsp;&nbsp;{icpInfoComp}&nbsp;&nbsp;{gaInfoComp}
                </div>
            </div>
            {/* {docs.policy !== "init" && <Policy state={docs.policy} />}

      {docs.agreement !== "init" && <Agreement state={docs.agreement} />} */}
        </div>
    );
};

export default withRouter(Vision);

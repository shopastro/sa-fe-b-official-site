import React, {useEffect, useState} from "react";
import {policy, agreement} from "./const";
import styles from "./index.module.scss";

type IProps = {
    locale: any;
    type: string;
};

const IndexPage: React.FC<IProps> = (props) => {
    const {locale, type} = props;
    return (
        <div className={styles["policy-container"]}>
            <div className={styles["pg-viewer-wrapper"]}>
                <div className={styles["pg-viewer"]} id="pg-viewer">
                    <div id="docx">
                        <div
                            className={styles["document-container"]}
                            dangerouslySetInnerHTML={{
                                __html: type == 'privacy' ? policy : agreement,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;

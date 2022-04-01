import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

type IProps = {
    size?: 14 | 24 | 26 | 34;
    onClick?: () => any;
};

const Title: React.FC<IProps> = (props) => {
    const {size = 24, onClick} = props;
    return (
        <span
            className={classNames(styles["title-width-slash"], styles[`size-${size}`])}
            onClick={() => {
                onClick && onClick();
            }}
        >
      {props.children}
    </span>
    );
};

export default Title;

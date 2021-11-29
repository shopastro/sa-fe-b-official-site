import React from "react";
import "./index.scss";
type IProps = {
  size?: 14 | 24 | 26 | 34;
  onClick?: () => any;
};

const Title: React.FC<IProps> = (props) => {
  const { size = 24, onClick } = props;
  return (
    <span
      className={`title-width-slash size-${size}`}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {props.children}
    </span>
  );
};

export default Title;

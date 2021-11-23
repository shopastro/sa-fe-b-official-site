import React from "react";
import "./index.scss";
type IProps = {
  size?: 14 | 24 | 26 | 34;
};

const Title: React.FC<IProps> = (props) => {
  const { size = 24 } = props;
  return (
    <span className={`title-width-slash size-${size}`}>{props.children}</span>
  );
};

export default Title;

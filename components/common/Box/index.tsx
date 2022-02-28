import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import delve from "dlv";
const sx = (props: any) => {
  return css(props.sx);
};
const base = (props: any) => {
  return css(props.__css);
};
const variant = ({ theme, variant, tx = "variants" }: any) => {
  // 没有指定相关主题，则什么也不做
  if (!variant) {
    return {};
  }
  return css(delve(theme, `${tx}.${variant}`, delve(theme, variant)));
};

export default styled("div", {
  shouldForwardProp: (prop) => {
    return isPropValid(prop as string);
  },
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  sx,
  variant
);

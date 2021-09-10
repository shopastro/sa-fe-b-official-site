import React from 'react';
import styled from "@emotion/styled";
import {compose, space, layout, typography, color, flexbox,} from 'styled-system'
import css, {get} from "@styled-system/css"
import shouldForwardProp from '@styled-system/should-forward-prop'

const sx = (props: any) => {return css(props.sx)(props.theme)}
const base = (props: any) => {return css(props.__css)(props.theme)}

const variant = ({theme, variant, tx = 'variants',}: any) => {
    return css(get(theme, tx + '.' + variant, get(theme, variant)))(theme)
}

export default styled('div', {
    shouldForwardProp,
})(
    {
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0
    },
    base,
    sx,
    variant,
    (props) => {
        return props.css
    },
    compose(
        space,
        layout,
        typography,
        color,
        flexbox,
    )
)


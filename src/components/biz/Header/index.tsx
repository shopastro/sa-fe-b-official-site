import React, {PropsWithChildren, useEffect, useRef, useState} from "react"
import {Box} from "@components/common"
import mq from "@components/common/mq"
import Button from "@components/common/Button"

// Biz
import Container from "@components/biz/Container"

import Menus from "./src/Menus"
import Logo from "@components/biz/Logo";
import {goTo} from "@root/utils";


const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {

    const {sx, ...restProps} = props
    const ctx = useRef({
        styleFinished: false,
    })
    const [gloHeaderStyle, setGloHeaderStyle] = useState({})
    useEffect(() => {
        const headerDom = document.getElementById('glo-header')
        window.onscroll = (e) => {
            const scrolLTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrolLTop != null) {
                const val = scrolLTop / 70
                const processP = val > 1 ? 1 : val
                if (processP < 1) {
                    ctx.current.styleFinished = false
                }
                if (ctx.current && ctx.current.styleFinished) {
                    return;
                }
                const style = {
                    background: `rgba(255,255,255,${(processP * 0.9).toFixed(2)})`
                }
                setGloHeaderStyle(style)
                if (processP == 1) {
                    ctx.current.styleFinished = true;
                }
            }
        }
    }, [])

    return (
        <Box

            id='glo-header'
            ref={ref}
            {...restProps}
            sx={{
                ...sx,
                backdropFilter: 'blur(8px)',
                ...gloHeaderStyle
            }}
        >
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Logo sx={{
                    padding: '1.6rem',
                    [mq[1]]: {
                        padding: '2rem'
                    }
                    // float:'left', paddingRight: "10rem",verticalAlign:'middle',paddingTop:'2rem'
                }}/>
                <Menus sx={{}}/>
                <Button onClick={()=>{
                    goTo("contact-us")
                }}>联系我们</Button>
            </Container>
        </Box>
    )
}

export default Component;
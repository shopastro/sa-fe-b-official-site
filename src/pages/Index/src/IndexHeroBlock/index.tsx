import React, {forwardRef, PropsWithChildren} from "react";
import Box from "@components/common/Box";
import Container from "@components/biz/Container";
import {h1Title, h2Title, heroContentWrapper, heroImgWrapper, highlight, xE, yE} from "./styles"
import mq from "@components/common/mq";

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                margin: "0 auto",
                backgroundImage: 'url(./static/hero-bottom.png)',
                backgroundSize: '1440px',
                backgroundPosition: '0 bottom',
                backgroundRepeat: 'repeat-x',
                "& .heroTitle1" :{
                    display: 'block'
                },
                [mq[1]]:{
                    ".heroTitle1" :{
                        display: 'inline'
                    }
                }
            }}
        >
            <Container sx={heroContentWrapper}>
                <Box sx={h1Title}><Box className='heroTitle1'>货品您搞定</Box><Box sx={highlight} className='heroTitle2'>出海我搞定</Box><Box sx={xE}/></Box>
                <Box sx={{
                    height:'1.3rem',
                    [mq[1]]:{
                        height: '1rem'
                    }

                }}></Box>
                <Box sx={h2Title}>Saas模式的一站式跨境电商服务平台，小白卖家的出海首选！</Box>
                <Box sx={heroImgWrapper}>
                    <Box sx={{position: 'relative'}}>
                        <Box sx={yE} />
                        <Box as='img' sx={{width: '100%'}} src='/static/hero-banner.png'/>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
};

Component.displayName = 'IndexHeroBlock';
export default forwardRef(Component);
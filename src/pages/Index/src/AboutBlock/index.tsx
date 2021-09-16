import React, {forwardRef, PropsWithChildren} from "react"
import Box from "@components/common/Box"
import Container from "@components/biz/Container"
import * as styles from "./styles"
import mq from "@components/common/mq";
import BannersCom from './Banners'

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            id='about'
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                overflow:'hidden',
                paddingTop: '4.1rem',
                paddingBottom: '4.1rem',
                backgroundColor: "#ffffff",
                userSelect: 'none',
                [mq[1]]:{
                    paddingTop: '7.5rem',
                    paddingBottom: '6.7rem',
                }
            }}
        >
            <Container sx={styles.ContentWrapper}>
                <Box sx={styles.h1Title}><Box as='span'>关于ShopAstro</Box></Box>
                <Box sx={{height:'2rem'}}></Box>
                <Box sx={styles.des}>帮助跨境卖家出海，让获客、交易、支付、物流、客户管理轻松简单</Box>
                <Box sx={{
                    margin: '-0.7rem',
                    paddingTop: '2.6rem',
                    [mq[1]]:{
                        paddingTop: '5rem',
                    }
                }}>
                    <BannersCom/>
                </Box>
            </Container>
        </Box>
    )
};

Component.displayName = 'AboutBlock';
export default forwardRef(Component);
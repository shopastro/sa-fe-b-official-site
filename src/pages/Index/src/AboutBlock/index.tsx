import React, {forwardRef, PropsWithChildren} from "react"
import Box from "@components/common/Box"
import Container from "@components/biz/Container"
import * as styles from "./styles"
import {ContentWrapper} from "./styles"

import BannersCom from './Banners'

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                padding: '106px 16px 94px 16px',
                backgroundColor: "#ffffff",
            }}
        >
            <Container sx={styles.ContentWrapper}>
                <Box sx={styles.h1Title}><Box as='span'>关于ShopAstro</Box></Box>
                <Box sx={{height:'20px'}}></Box>
                <Box sx={styles.des}>帮助中小卖家出海，让获客、交易、支付、物流、客户管理轻松简单</Box>
                <Box sx={{textAlign: 'left',margin: '-10px',paddingTop: '70px'}}>
                    <BannersCom/>
                </Box>
            </Container>
        </Box>
    )
};

Component.displayName = 'AboutBlock';
export default forwardRef(Component);
import React, {forwardRef, PropsWithChildren, useEffect, useRef, useState} from "react";
import Box from "@components/common/Box"
import InfoCard from "@components/biz/InfoCard"
import {bannersData} from "./config"

import Flipsnap from "@components/common/Flipsnap";

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {

    // const {bannerWidth} = props;
    const [bannerWidth, setBannerWidth] = useState(305) /// ***px
    const bannerDoms = []
    const flipsnapRef = useRef(null)
    for (let i = 0; i < bannersData.length; i++) {
        const bannerData = bannersData[i]
        if (!bannerData) {
            continue
        }
        const {icon, title, des} = bannerData
        bannerDoms.push((
            <Box sx={{float: 'left', padding: '10px', width: `${bannerWidth}px`}}>
                <InfoCard icon={icon} title={title} des={des}/>
            </Box>

        ))
    }

    useEffect(() => {
        // init
        if (flipsnapRef && flipsnapRef.current) {
            const a: any = new Flipsnap(flipsnapRef.current)
            console.log(flipsnapRef.current);
        }
    }, [])

    return (
        // banners viewport: width  = single banner's width
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
            }}
        >
            {/*banners container: width = single banner's width * n*/}
            <Box ref={flipsnapRef} sx={{
                width: `${bannerWidth * bannerDoms.length}px`
            }}>
                {bannerDoms}
            </Box>
            <Box sx={{clear: 'both'}}/>
        </Box>
    )
};

Component.displayName = 'BizBanners';
export default forwardRef(Component);
import React, {forwardRef, PropsWithChildren, useEffect, useRef, useState} from "react";
import Box from "@components/common/Box"
import InfoCard from "@components/biz/InfoCard"
import {bannersData} from "./config"
import * as styles from "./styles"

import Flipsnap from "@components/common/Flipsnap";
import {LeftArrowIcon, RightArrowIcon} from "@components/biz/Icon";

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {

    // const {bannerWidth} = props;
    const [bannerWidth, setBannerWidth] = useState(305) /// ***px
    const [currentPoint, setCurrentPoint] = useState(0)

    const ctx = useRef({
        flipsnap: null,
    })

    const prossedBannersData = []
    const bannerDoms: any = []
    const flipsnapRef = useRef(null)
    for (let i = 0; i < bannersData.length; i++) {
        const bannerData = bannersData[i]
        if (!bannerData) {
            continue
        }
        prossedBannersData.push(bannerData)
    }

    const bannerLen = prossedBannersData.length;


    const bannerItemWidthStyle: string = bannerLen <= 4 ? `${100 / bannerLen}%` : `305px`
    const wrapperWidthStyle: string = bannerLen <= 4 ? '100%' : `${bannerWidth * bannerLen}px`
    let isOdd: boolean = bannerLen % 2 == 0 ? false : true
    let wrapperClassName = ''
    let showMore = true
    if (bannerLen <= 4) {
        showMore = false
        wrapperClassName = isOdd ? 'odd-items' : 'not-odd-items';
    }

    for (let i = 0; i < prossedBannersData.length; i++) {
        const bannerData: any = prossedBannersData[i]
        const {icon, title, des} = bannerData
        bannerDoms.push((
            <Box sx={{
                float: 'left',
                padding: '0.7rem',
                width: bannerItemWidthStyle
            }} className='banner-item'>
                <InfoCard active={showMore && i == currentPoint} icon={icon} title={title} des={des}/>
            </Box>
        ))
    }

    const navComp = !showMore ? null : (
        <Box
            sx={{
                display: 'inline-block',
                paddingTop: '50px',
                '& svg path': {
                    fill: "#2050CB"
                },
            }}
        >
            <Box
                sx={styles.btn}
                onClick={() => {
                    if (ctx.current && ctx.current.flipsnap) {
                        const aFlipsnap: any = ctx.current.flipsnap;
                        if (aFlipsnap.currentPoint <= 0) {
                            return
                        } else {
                            aFlipsnap.toPrev();
                        }
                    }
                }}
            ><LeftArrowIcon className='aicon'/></Box>
            <Box
                sx={{
                    ...styles.btn,
                    marginLeft: '20px',
                }}
                onClick={() => {
                    if (ctx.current && ctx.current.flipsnap) {
                        const aFlipsnap: any = ctx.current.flipsnap;
                        aFlipsnap.toNext();
                    }
                }}
            ><RightArrowIcon className='aicon'/></Box>
        </Box>
    )

    const pElComp: any = showMore ? (
        <Box sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: "182px",
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 78.57%, rgb(255, 255, 255) 100%)'
        }}></Box>) : null


    useEffect(() => {
        // init
        if (flipsnapRef && flipsnapRef.current) {
            if (bannerDoms && bannerDoms.length > 4) {
                let tid: any = null
                ctx.current.flipsnap = new Flipsnap(flipsnapRef.current, {
                    onChange: (newPoint: any) => {
                        const nPoint: number = parseInt(newPoint, 10);
                        clearTimeout(tid)
                        tid = setTimeout(() => {
                            setCurrentPoint(nPoint)
                        }, 200)
                    }
                })
            }
        }
    }, [])

    return (
        // banners viewport: width  = single banner's width
        <Box sx={styles.wrapper}>
            <Box
                ref={ref}
                {...props}
                __css={{
                    width: '100%',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                className={wrapperClassName}
            >
                {/*banners container: width = single banner's width * n*/}
                <Box ref={flipsnapRef} sx={{
                    width: wrapperWidthStyle
                }}>
                    {bannerDoms}
                </Box>
                <Box sx={{clear: 'both'}}/>
                {pElComp}
            </Box>
            {navComp}
        </Box>

    )
};

Component.displayName = 'BizBanners';
export default forwardRef(Component);
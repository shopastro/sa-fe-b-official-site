import React, {forwardRef, PropsWithChildren} from "react"
import Box from "@components/common/Box"
import Container from "@components/biz/Container"
import * as styles from "./styles"
import {featuresData} from "./config"

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {


    const comps = []
    if (!featuresData || featuresData.length <= 0) {
        return null
    }


    for (let i = 0; i < featuresData.length; i++) {
        const featureData = featuresData[i]
        if (!featureData) {
            continue
        }
        const {icon, label} = featureData
        comps.push((
            <Box className='feature-block'>{icon}<Box as='span' className='afont' sx={{
                ...styles.label,
                marginLeft: icon ? '10px' : 0,
            }}>{label}</Box></Box>
        ))
    }

    const withStyle = `${Math.floor((100 / comps.length))}%`
    return (
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                padding: '28px 0',
                backgroundColor: "#ffffff",
                userSelect: 'none',
            }}
        >
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                '& .aicon path': {
                    stroke: "#2050CB"
                },

            }}>
                {comps}
            </Container>
        </Box>
    )
};

Component.displayName = 'AboutBlock';
export default forwardRef(Component);
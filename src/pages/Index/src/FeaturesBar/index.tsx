import React, {forwardRef, PropsWithChildren} from "react"
import Box from "@components/common/Box"
import Container from "@components/biz/Container"
import * as styles from "./styles"
import {featuresData} from "./config"
import mq from "@components/common/mq";

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

    return (
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                padding: '28px 0',
                backgroundColor: "#ffffff",
                userSelect: 'none',
                '& .feature-block':{
                    width: '50%',
                    float: 'left',
                    padding: '2.5rem 0.5rem'
                },
                [mq[1]]:{
                    '& .feature-block':{
                        width: 'auto',
                        float: 'none',
                    }
                }
            }}
        >
            <Container sx={{
                display: 'block',
                textAlign: 'center',
                justifyContent: 'space-between',
                '& .aicon path': {
                    stroke: "#2050CB"
                },
                [mq[1]]:{
                    display: 'flex',
                }

            }}>
                {comps}
            </Container>
            <Box sx={{clear: 'both'}}/>
        </Box>
    )
};

Component.displayName = 'AboutBlock';
export default forwardRef(Component);
import React, {Fragment, PropsWithChildren} from "react"
import {Box} from "@components/common"
import * as styles from "./styles"
import styled from "@emotion/styled";

// Biz

const Component: React.FC<PropsWithChildren<{
    icon?: any,
    title?: string;
    des?: string;
}>> = (props) => {

    const {icon, title, des} = props;
    const hasIcon = icon ? true : false

    return (
        <Box
            {...props}
            __css={{
                ...styles.CardItem,

            }}
        >
            <Box sx={{zIndex: 1, position:'relative'}}>
                <Box>{icon}<Box as='span' className='afont' sx={{
                    ...styles.title,
                    marginLeft: hasIcon ? '10px' : 0,
                }}>{title}</Box></Box>
                <Box sx={{
                    ...styles.des,
                }} className='afont'><span>{des}</span></Box>
            </Box>
            <Box sx={{
                width: '37%',
                height: '100%',
                backgroundColor:"#4262FE",
                position: 'absolute',
                right: '2.3%',
                top: '42.5%',
                borderRadius: "50px 0px 0px 50px",
                transform: 'rotate(120deg)',
                zIndex: '0',
                opacity: 0,
            }} className='hover-show'/>
        </Box>
    )
}
Component.displayName = 'InfoCard'
export default Component;
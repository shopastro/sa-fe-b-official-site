import React, {Fragment, PropsWithChildren} from "react"
import {Box} from "@components/common"
import * as styles from "./styles"

// Biz

const Component: React.FC<PropsWithChildren<{
    icon?: any,
    title?: string;
    des?: string;
    active?: boolean;
}>> = (props) => {

    const {icon, title, des, active = false} = props;
    const hasIcon = icon ? true : false

    return (
        <Box
            {...props}
            __css={{
                ...styles.CardItem,
            }}
            className={active ? 'active' : ''}
        >
            <Box sx={{zIndex: 1, position: 'relative'}}>
                <Box>{icon}<Box as='span' className='afont' sx={{
                    ...styles.title,
                    marginLeft: hasIcon ? '0.7rem' : 0,
                }}>{title}</Box></Box>
                <Box sx={{
                    ...styles.des,
                }} className='afont'><span>{des}</span></Box>
            </Box>
            <Box sx={{
                width: '37%',
                height: '100%',
                backgroundColor: "#4262FE",
                position: 'absolute',
                right: '8.3%',
                top: '60%',
                borderRadius: "0 3.57rem 3.57rem 0px",
                transform: 'rotate(308deg)',
                zIndex: '0',
                opacity: 0,
            }} className='hover-show'/>
        </Box>
    )
}
Component.displayName = 'InfoCard'
export default Component;
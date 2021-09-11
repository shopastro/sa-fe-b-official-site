import React, {Fragment, PropsWithChildren} from "react"
import {Box} from "@components/common"
import * as styles from "./styles"
import {IInfoData} from "@root/type"


import Info from './Info'


const Component: React.FC<PropsWithChildren<{
    type?: string; // 1, text in left, pic in right
    media?: any; // the media block Comp , it can ben anything.
    infoData?: IInfoData;
    styleConfig?: any;
}>> = (props) => {

    const {type, media, infoData,styleConfig} = props

    const fType = type ? type : '1'
    const infoStyle: any = {
        ...styles.info
    }
    const mediaStyle: any = {
        ...styles.media
    }
    const infoWrapperStyle = {
        paddingLeft: '0'
    }
    if (fType != '1') {
        infoStyle.paddingLeft = '50%'
        infoStyle.width = '100%'
        infoWrapperStyle.paddingLeft = '94px'
        mediaStyle.left = '0'
    } else {
        mediaStyle.right = '0'
    }

    const infoComp = infoData ? <Box sx={infoStyle}><Info styleConfig={styleConfig} sx={infoWrapperStyle} data={infoData}/></Box> : null
    const mediaComp = media ? (<Box sx={mediaStyle}>{media}</Box>) : null;

    return (
        <Box
            {...props}
            __css={{position: 'relative'}}
        >
            {infoComp}
            {mediaComp}
            <Box sx={{clear: 'both'}}/>
        </Box>
    )
}
Component.displayName = 'InfoBlock'
export default Component;
import React, {Fragment, PropsWithChildren} from "react"
import {Box} from "@components/common"
import * as styles from "./styles"
import {IInfoData} from "@root/type"
import mq from "@components/common/mq";


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
        ...styles.info,
    }
    const mediaStyle: any = {
        ...styles.media
    }
    const infoWrapperStyle:any = {
        paddingLeft: '0',
        [mq[1]]:{}
    }
    if (fType != '1') {
        infoStyle[mq[1]]['paddingLeft'] = '50%'
        infoStyle.width = '100%'
        infoWrapperStyle[mq[1]]['paddingLeft'] = '6.7rem'
        mediaStyle.left = '0'
    } else {
        infoStyle[mq[1]]['paddingLeft'] = '0'
        mediaStyle.right = '0'
    }

    const infoComp = infoData ? <Box className='info-area' sx={infoStyle}><Info styleConfig={styleConfig} sx={infoWrapperStyle} data={infoData}/></Box> : null
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
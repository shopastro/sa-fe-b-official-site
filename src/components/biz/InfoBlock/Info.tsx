import React, {Fragment, PropsWithChildren} from "react"
import {Box} from "@components/common"
import {IInfoData} from "@root/type";
import * as styles from "./styles";


const Component: React.FC<PropsWithChildren<{
    data: IInfoData;
    sx?: any;
    styleConfig?: any;
}>> = (props) => {
    const {data: {title, subTitlte, liContent}, sx = {}, styleConfig = {}} = props;
    const subTitlteDom = subTitlte ? (
        <Box sx={{
            ...styles.subTitle,
            ...(styleConfig.subTitle ? styleConfig.subTitle : {})
        }}>{subTitlte}</Box>
    ) : null;
    const titleDom = title ? (
        <Box sx={{
            ...styles.title,
            marginTop: subTitlte ? '10px' : 0,
            ...(styleConfig.title ? styleConfig.title : {})
        }}>{title}</Box>
    ) : null;
    const liContentDom = (liContent && liContent.length > 0) ?
        (<Box>
            {liContent.map((el, index) => {
                if (!el) {
                    return null
                } else {
                    return (<Box sx={{
                        ...styles.listItem,
                        marginTop: index > 0 ? '10px' : '0'
                    }}>
                        <Box sx={{
                            display: 'inline-block',
                            width: '0.625em',
                            height: '0.625em',
                            marginRight: "0.5em",
                            marginTop: "0.25em",
                            backgroundColor: "#2050CB",
                            float: 'left',
                        }}/> <Box sx={{overflow: 'hidden'}}>{el}</Box>
                        <Box sx={{clear:'both'}}/>
                    </Box>)
                }
            })}
        </Box>) : null;

    return (
        <Box
            {...props}
            __css={sx}
        >
            {subTitlteDom}
            {titleDom}
            {(subTitlte || title) ? <Box style={{height: '24px'}}/> : null}
            {liContentDom}
        </Box>
    )
}
Component.displayName = 'InfoBlock'
export default Component;
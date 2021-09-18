import React, {PropsWithChildren, useRef, useState} from "react"
import {Box} from "@components/common"

// Biz
import {menuData, styles} from "./config";
import Logo from "@components/biz/Logo";
import {MenuItemDataType} from "@root/type";
import mq from "@components/common/mq";
import {goTo} from "@root/utils";

const Component: React.FC<PropsWithChildren<any>> = (props) => {

    const [selectedVal, setSelectedVal] = useState('#')
    const menuItemsDom = [];
    for (let i = 0; i < menuData.length; i++) {
        const menuItemData = menuData[i];
        if (!menuItemData) {
            continue
        }
        const {value, label}: MenuItemDataType = menuItemData;

        const extraStyle = selectedVal === value ? {
            color: '#2050CB',
            '& a:link': {
                color: '#2050CB'
            },
            '& a:visited': {
                color: '#2050CB'
            },
            '& a:hover': {
                color: '#2050CB'
            },
            '& a:active': {
                color: '#2050CB'
            },
            fontWeight: "bold",
        }: {}
        menuItemsDom.push((
            <Box
                onClick={(e: any) => {
                    e.preventDefault();
                    if (value) {
                        if(value === "#"){
                            goTo(value.replace("html", ''))
                        }else {
                            goTo(value.replace("#", ''))
                        }
                        setSelectedVal(value)
                    }
                }}
                sx={{
                    ...styles.menuItemWrapper,
                    ...extraStyle
                }}
            ><Box as='a' href={value} sx={styles.menuItem}>{label}</Box></Box>
        ))
    }

    return (
        <Box
            {...props}
            __css={{
                fontSize: '1rem',
                lineHeight: '1.3',
                color: "#111111",
                fontWeight: 300,
                padding: "2rem 0",
                overflow: "hidden",
                display: 'none',
                [mq[1]]: {
                    display: 'block'
                }
            }}>
            {menuItemsDom}
            <Box sx={{display: "block", clear: 'both'}}/>
        </Box>
    )
}

export default Component;
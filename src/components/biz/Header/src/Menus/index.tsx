import React, {PropsWithChildren} from "react"
import {Box} from "@components/common"

// Biz
import {menuData, styles} from "./config";
import Logo from "@components/biz/Logo";
import {MenuItemDataType} from "@root/type";
import mq from "@components/common/mq";
import {goTo} from "@root/utils";

const Component: React.FC<PropsWithChildren<any>> = (props) => {
    const menuItemsDom = [];
    for (let i = 0; i < menuData.length; i++) {
        const menuItemData = menuData[i];
        if (!menuItemData) {
            continue
        }
        const {value, label}: MenuItemDataType = menuItemData;
        menuItemsDom.push((
            <Box
                onClick={(e) => {
                    e.preventDefault();
                    if (value) {
                        goTo(value.replace("#", ''))
                    }
                }}
                sx={styles.menuItemWrapper}
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
import React, {PropsWithChildren} from "react"
import {Box} from "@components/common"

// Biz
import {menuData, styles} from "./config";
import {MenuItemDataType} from "@root/type";
import Logo from "@components/biz/Logo";


const Component: React.FC<PropsWithChildren<any>> = (props) => {
    const menuItemsDom = [];
    for (let i = 0; i < menuData.length; i++) {
        const menuItemData = menuData[i];
        if (!menuItemData) {
            continue
        }
        const {value, label}: MenuItemDataType = menuItemData;
        menuItemsDom.push((
            <Box sx={styles.menuItemWrapper}><Box as='a' href={value} sx={styles.menuItem}>{label}</Box></Box>
        ))
    }

    return (
        <Box
            {...props}
            __css={{
            fontSize: '14px',
            lineHeight: '1.3',
            color: "#111111",
            fontWeight: 300,
            padding: "25px 0",
            overflow: "hidden",
        }}>
            <Logo sx={{float:'left', paddingRight: "10rem",verticalAlign:'middle'}}/>
            {menuItemsDom}
            <Box sx={{display: "block", clear: 'both'}}/>
        </Box>
    )
}

export default Component;
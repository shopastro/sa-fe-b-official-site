interface MenuItemDataType {
    label: string;
    value?: string;
}

export const menuData:Array<MenuItemDataType> = [
    {
        label: '首页',
        value: '#'
    },
    {
        label: '关于ShopAstro',
        value: '#about'
    },
    {
        label: '服务',
        value: '#service'
    },
    {
        label: '加入我们',
        value: '#join'
    },
]

export const styles = {
    menuItem: {
        padding: '12px 16px',
        '&:link': {
            color: '#111111'
        },
        '&:visited': {
            color: '#111111'
        },
        '&:hover': {
            color: '#111111'
        },
        '&:active': {
            color: '#111111'
        }
    },
    menuItemWrapper: {
        padding: '10px',
        float: "left"
    }
}


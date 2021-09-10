import React from 'react';
import {CustomIcon, PaymentIcon, TradeIcon, NoteIcon} from "@components/biz/Icon"

export const bannersData = [
    {
        icon: <CustomIcon verticalAlign='middle' className='afont'/>,
        title: "获客",
        des: "洞察全球买家，建站、投放，轻松简单"
    },
    {
        icon: <PaymentIcon verticalAlign='middle' className='afont'/>,
        title: "交易",
        des: "本地化买家体验，移动下单，随时随地"
    },
    {
        icon: <TradeIcon verticalAlign='middle' className='afont'/>,
        title: "保障",
        des: "多支付渠道，差异化物流，安全快捷，省钱省心。"
    },
    {
        icon: <NoteIcon verticalAlign='middle' className='afont'/>,
        title: "管理",
        des: "多店铺、CRM、全渠道投放，好工具，让管理和运营事倍功半"
    },
]
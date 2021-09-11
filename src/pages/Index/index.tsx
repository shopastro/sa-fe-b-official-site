import React, {Fragment} from 'react'
import {Button, Box} from '@components/common'
import Header from "@components/biz/Header"
import {headerWrapper, trafficBannerImg} from './styles'

import IndexHeroBlock from './src/IndexHeroBlock'
import AboutBlock from "./src/AboutBlock"
import Container from "@components/biz/Container"


import InfoBlock from "@components/biz/InfoBlock"

const IndexPage: React.FC = (props) => {
    return (
        <Box>
            <Box sx={headerWrapper}>
                <Header/>
            </Box>
            <IndexHeroBlock/>
            <AboutBlock/>
            <Box sx={{backgroundColor: '#FAFBFC'}}>
                <Container>
                    <InfoBlock type='2' media={<Box>
                        <Box as='img' sx={{width: '100%'}} src={'/static/banner1.png'}/>
                    </Box>} infoData={{
                        title: "无门槛建站",
                        subTitlte: '方便快捷',
                        liContent: ['无需再为多到花眼的模版选择而烦恼，点点就好！']
                    }}/>
                </Container>
            </Box>
            <Box sx={{backgroundColor: '#FFFFFF', position: 'relative'}}>
                <Container>
                    <InfoBlock type='1' infoData={{
                        title: "多样化精准投放",
                        subTitlte: '转化率提升200%',
                        liContent: ['贴合本地买家的多渠道广告+社交投放，精准转化、效率翻倍']
                    }}/>
                </Container>
                <Box as='img' sx={trafficBannerImg} src='/static/banner2.png'/>
            </Box>
            <Box
                sx={{background: 'linear-gradient(89.95deg, rgba(255, 248, 251, 0) 0.83%, rgba(249, 246, 235, 0.417778) 22.51%, rgba(212, 242, 253, 0.24) 60.7%, rgba(205, 243, 255, 0) 99.92%)'}}>
                <Container>
                    <InfoBlock type='2' media={<Box>
                        <Box as='img' sx={{width: '100%'}} src={'/static/banner3.png'}/>
                    </Box>} infoData={{
                        title: <Fragment><Box>省钱省心的</Box><Box>支付、物流方案</Box></Fragment>,
                        subTitlte: '贴心细致周到',
                        liContent: ['多支付渠道服务，安全快捷！', '差异化的物流解决方案，保障买家所需']
                    }}/>
                </Container>
            </Box>
            <Box sx={{background: '#ffffff'}}>
                <Container>
                    <InfoBlock type='1' media={<Box>
                        <Box as='img' sx={{width: '100%'}} src={'/static/banner4.png'}/>
                    </Box>} infoData={{
                        title: "事半功倍的管理工具 贴心专业的专人服务",
                        subTitlte: '全方位智能优化',
                        liContent: ['多店铺、CRM、全渠道投放、智能决策等，好工具要好用，才能事倍功半', '专业的服务和运营团队，将陪伴守护您的跨境出海之路！']
                    }}/>
                </Container>
            </Box>
            <Box sx={{background: '#ffffff'}}>
                <Container>
                    <InfoBlock type='2'
                               media={<Box>
                                   <Box as='img' sx={{width: '100%'}} src={'/static/banner5.png'}/>
                               </Box>}
                               styleConfig={{
                                   subTitle: {fontSize: "36px"},
                                   title: {fontSize: '24px'}
                               }}
                               infoData={{
                                   title: "星盘不仅懂中国卖家，更懂海外买家",
                                   subTitlte: '星盘ShopAstro',
                                   liContent: ['星盘由一群在跨境电商领域奋战十年以上的老兵组成，不仅懂中国卖家，更懂海外买家', '我们的愿景是：让中国跨境卖家享受更好的商业服务']
                               }}

                    />
                </Container>
            </Box>
        </Box>
    )
}

export default IndexPage;




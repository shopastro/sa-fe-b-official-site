import React, {Fragment} from 'react'
import {Button, Box} from '@components/common'
import Header from "@components/biz/Header"
import * as styles from './styles'

import IndexHeroBlock from './src/IndexHeroBlock'
import AboutBlock from "./src/AboutBlock"
import FeaturesBarBlock from "./src/FeaturesBar"

import Container from "@components/biz/Container"


import InfoBlock from "@components/biz/InfoBlock"
import Card from "@components/biz/Card"
import Logo from "@components/biz/Logo"
import mq from "@components/common/mq";


const IndexPage: React.FC = (props) => {
    return (
        <Box>
            <Box sx={styles.headerWrapper}>
                <Header sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 888,
                }}/>
                <IndexHeroBlock/>
            </Box>
            <AboutBlock/>
            <Box
                id="service"
                sx={{
                    backgroundColor: '#FAFBFC',
                    userSelect: 'none',
                    paddingBottom: '4.7rem',
                    [mq[1]]: {
                        paddingBottom: 0,
                    }
                }}>
                <Container>
                    <InfoBlock type='2' media={<Box>
                        <Box as='img' sx={{width: '100%'}}
                             src={'//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/banner1.png'}/>
                    </Box>} infoData={{
                        title: "无门槛建站",
                        subTitlte: '方便快捷',
                        liContent: ['无需再为多到花眼的模版选择而烦恼，点点就好！']
                    }}/>
                </Container>
            </Box>
            <Box sx={{
                backgroundColor: '#FFFFFF',
                position: 'relative',
                userSelect: 'none',
                width: '100%',
                overflow: 'hidden',
                paddingBottom: '4.7rem',
                "& .traffic-area .info-area": {
                    paddingBottom: 0
                },
                [mq[1]]: {
                    paddingBottom: 0,
                    "& .traffic-area .info-area": {
                        paddingBottom: '15rem',
                    },
                },

            }}>
                <Container className='traffic-area'>
                    <InfoBlock type='1' infoData={{
                        title: "多样化精准投放",
                        subTitlte: '转化率提升200%',
                        liContent: ['贴合本地买家的多渠道广告+社交投放，精准转化、效率翻倍']
                    }}/>
                </Container>
                <Box as='img' sx={styles.trafficBannerImg}
                     src='//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/banner2.png'/>
            </Box>
            <Box
                sx={{
                    userSelect: 'none',
                    background: 'linear-gradient(89.95deg, rgba(255, 248, 251, 0) 0.83%, rgba(249, 246, 235, 0.417778) 22.51%, rgba(212, 242, 253, 0.24) 60.7%, rgba(205, 243, 255, 0) 99.92%)',
                    paddingBottom: '4.7rem',
                    [mq[1]]: {
                        paddingBottom: 0,
                    }
                }}>
                <Container>
                    <InfoBlock type='2' media={<Box>
                        <Box as='img' sx={{width: '100%'}}
                             src={'//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/banner3.png'}/>
                    </Box>} infoData={{
                        title: <Fragment><Box>省钱省心的</Box><Box>支付、物流方案</Box></Fragment>,
                        subTitlte: '贴心细致周到',
                        liContent: ['多支付渠道服务，安全快捷！', '差异化的物流解决方案，保障买家所需']
                    }}/>
                </Container>
            </Box>
            <Box sx={{
                background: '#ffffff', userSelect: 'none',
                paddingBottom: '4.7rem',
                [mq[1]]: {
                    paddingBottom: 0,
                }
            }}>
                <Container>
                    <InfoBlock type='1' media={<Box>
                        <Box as='img' sx={{width: '100%'}}
                             src={'//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/banner4.png'}/>
                    </Box>} infoData={{
                        title: <Fragment><Box>事半功倍的管理工具</Box><Box>贴心专业的专人服务</Box></Fragment>,
                        subTitlte: '全方位智能优化',
                        liContent: ['多店铺、CRM、全渠道投放、智能决策等，好工具要好用，才能事半功倍', '专业的服务和运营团队，将陪伴守护您的跨境出海之路！']
                    }}/>
                </Container>
            </Box>
            <Box
                id='join'
                sx={{
                    background: 'linear-gradient(33.9deg, rgba(255, 248, 251, 0) 10.16%, rgba(249, 246, 235, 0.417778) 28.19%, rgba(212, 242, 253, 0.24) 59.97%, rgba(205, 243, 255, 0) 92.61%)',
                    userSelect: 'none',
                    paddingBottom: '4.7rem',
                    position: 'relative',
                    [mq[1]]: {
                        paddingBottom: 0,
                    }
                }}>
                <Container>
                    <InfoBlock type='2'

                               styleConfig={{
                                   subTitle: {
                                       fontSize: "2rem",
                                       [mq[1]]: {
                                           fontSize: "2.57rem",
                                       }
                                   },
                                   title: {
                                       fontSize: '1.33rem',
                                       [mq[1]]: {
                                           fontSize: '1.71rem',
                                       }
                                   },

                               }}
                               infoData={{
                                   title: "星盘不仅懂中国卖家，更懂海外买家",
                                   subTitlte: '星盘ShopAstro',
                                   liContent: ['星盘由一群在跨境电商领域奋战十年以上的老兵组成，不仅懂中国卖家，更懂海外买家', '我们的使命是：让中国跨境卖家享受更好的商业服务']
                               }}
                    />
                </Container>
                <Box
                    as='img'
                    sx={{
                        width: '100%',
                        maxWidth: '833px',
                        [mq[1]]: {
                            position: 'absolute',
                            width: '57.8%',
                            top: '50%',
                            left: 0,
                            transform: 'translate(0, -50%)',
                        },
                        [mq[3]]: {
                            left: '8%',
                            transform: 'translate(0, -50%)',
                        }
                    }}
                    src={'//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/banner5.png'}
                />
            </Box>
            <Box id='contact-us' sx={{
                padding: '3.57rem 0',
            }}>
                <Container >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        [mq[1]]: {
                            flexDirection: 'row',
                        }
                    }}>
                        <Box sx={styles.cardWrapper}>
                            <Card
                                infoData={{
                                    title: "想建站出海？请联系我们",
                                    subTitlte: "Contact us",
                                    liContent: [
                                        // <Box key={1} as='a' href='tel:+86057123456735'>Tel: 0571-23456738</Box>,
                                        <Box key={2} as='a' href='mailto:contact@shopastro.com'>Mail:
                                            contact@shopastro.com</Box>
                                    ]
                                }}
                                imgSizeRatio={2.565}
                                imgURL='//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/image1.jpg'
                                showArrow={false}
                            />
                        </Box>
                        <Box id='join-us' sx={styles.cardWrapper}>
                            <Card
                                infoData={{
                                    title: "加入我们",
                                    subTitlte: "Join us",
                                    liContent: [
                                        '年轻的团队，拥有十余年丰富跨境产品技术服务经验',
                                        '期待与优秀的你，一同为中国跨境卖家打造优质商业服务'
                                    ]
                                }}
                                imgSizeRatio={2.565}
                                color='#6173A7'
                                bgColor='#CEDBFF'
                                link='https://www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html'
                                imgURL='//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/image2.jpg'/>
                        </Box>
                        <Box sx={{clear: 'both'}}/>
                    </Box>
                </Container>
            </Box>
            <Box sx={{
                userSelect: 'none',
            }}>
                <FeaturesBarBlock/>
            </Box>
            <Box sx={{
                userSelect: 'none',
                position: 'relative',
                background: 'linear-gradient(88.97deg, #FF8BC3 -3.87%, #4081FF 28.34%, #31C6FF 85.79%, #26FFFF 101.25%)'
            }}>
                <Box sx={{
                    backgroundImage: 'url(//sys.cdn.beta.myshopastro.com/fe/official-site/0.0.6/static/footer-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat-x',
                    textAlign: 'center',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    opacity: 0.5,
                    overflow: 'hidden'
                }}>
                    <Box sx={{

                        color: '#ffffff',
                        opacity: 0.2,
                        textAlign: 'center',
                        fontWeight: '900',
                        letterSpacing: '0.5em',
                        fontSize: '3.33rem',
                        padding: '2.2rem 0.86rem',
                        [mq[1]]: {
                            letterSpacing: '0.5em',
                            fontSize: '8.57rem',
                            padding: '2.43rem 0.86rem',
                        }
                    }}>SHOPASTRO</Box>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: "1.33rem",
                    padding: '3.2rem 0.857rem 3.2rem 0.857rem',
                    position: 'relative',
                    zIndex: 1,
                    letterSpacing: '0.1em',
                    [mq[1]]: {
                        fontSize: "2.29rem",
                        padding: '6rem 0.857rem 5.14rem 0.857rem',
                    }
                }}>
                    <Box as='span'>让中国跨境卖家享受更好的商业服务</Box>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: '#1C2A47',
                padding: '1.58rem 0',
                userSelect: 'none',
                [mq[1]]: {
                    padding: '2.5rem 0',
                }
            }}>
                <Container sx={{
                    display: 'block',
                    textAlign: 'center',
                    [mq[1]]: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }

                }}>
                    <Logo className='footer-logo' sx={{
                        display: 'none',
                        paddingRight: "10rem",
                        verticalAlign: 'middle',
                        '& path': {fill: "#ffffff"},
                        [mq[1]]: {
                            display: 'block',
                        }
                    }}/>
                    <Box sx={{color: "#666666", fontSize: "0.857rem", textAlign: 'right', lineHeight: '1.6'}}>
                        <Box as='span'>Copyright ©2021 ShopAstro All Rights Reserved. <br/> 星盘起航（杭州）网络技术有限公司</Box></Box>
                </Container>
            </Box>
        </Box>
    )
}

export default IndexPage;




import React, {Fragment, PropsWithChildren} from "react"
import {Box} from "@components/common"
import * as styles from "./styles"
import {IInfoData} from "@root/type"
import {RightArrowIcon} from "@components/biz/Icon"

const Component: React.FC<PropsWithChildren<{
    imgURL?: string;
    imgSizeRatio?: number;
    color?: string;
    bgColor?: string;
    infoData?: IInfoData;
    showArrow?: boolean;
    link?: string;
}>> = (props) => {

    const {imgURL, color = '#DA9327', bgColor = '#FFE8BB', infoData = {}, imgSizeRatio = 1, showArrow = true, link} = props;


    const {title, subTitlte, liContent = []} = infoData
    const infoComp = (
        <Fragment>
            {subTitlte ? <Box sx={styles.subTitle}>{subTitlte}</Box> : null}
            {title ? <Box sx={{
                ...styles.title,
                marginTop: subTitlte ? '5px' : 0,
            }}>{title}</Box> : null}
            {liContent ? <Box
                sx={{
                    marginLeft: '0',
                    marginRight: '0',
                    marginBottom: '0',
                    padding: 0,
                    marginTop: (subTitlte || title) ? '12px' : 0,
                    minHeight: "2.4rem"
                }}
                as='ul'
            >{liContent.map((el, index) => {
                if (!el) {
                    return null
                }
                return <Box key={index} as='li' sx={{
                    ...styles.li,
                    marginTop: index > 0 ? '0.5rem' : 0,
                    "& a": {
                        '&:link,&:visited,&:hover,&:active': {
                            color: color,
                        }
                    }
                }}>{el}</Box>
            })}</Box> : null}
        </Fragment>
    );

    return (
        <Box
            {...props}
            onClick={()=>{
                if(link){
                    window.open(link, '_blank')
                }
            }}
            __css={{
                ...styles.Card,
                flex: '1',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box sx={{
                fontSize: '0',
                position: 'relative',
                width: '100%',
            }}>
                <Box
                    sx={{
                        width: '100%',
                        paddingTop: `${Math.floor(100 / imgSizeRatio)}%`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}/>
                <Box as='img' sx={styles.img} src={imgURL}/>
            </Box>
            <Box sx={{
                width: '100%',
                position: 'relative',
                padding: "1rem 6rem 1.5rem 1.5rem",
                flex: '1',
                backgroundColor: bgColor,
                color: color,

                "& .aicon path": {
                    fill: '#000000'
                }
            }}>{infoComp}
                {showArrow ? <Box sx={{
                    padding: '9px',
                    borderRadius: '100px',
                    backgroundColor: '#ffffff',
                    overflow: 'hidden',
                    position: 'absolute',
                    right: '18px',
                    bottom: '18px',
                    fontSize: '0'
                }}><RightArrowIcon className='aicon'/> </Box> : null}
            </Box>
        </Box>
    )
}
Component.displayName = 'InfoCard'
export default Component;
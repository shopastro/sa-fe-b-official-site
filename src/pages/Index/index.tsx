import React from 'react';
import {Button, Box } from '@components/common'
import Header from "@components/biz/Header"
import {headerWrapper} from './styles';

import IndexHeroBlock from './src/IndexHeroBlock';
import AboutBlock from "./src/AboutBlock";

const IndexPage : React.FC = (props)=>{
    return (
        <Box>
            <Box sx={headerWrapper}>
                <Header/>
                <IndexHeroBlock/>
                <AboutBlock/>
            </Box>

        </Box>
    )
}

export default IndexPage;




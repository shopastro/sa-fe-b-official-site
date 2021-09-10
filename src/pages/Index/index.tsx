import React from 'react';
import {Button, Box } from '@components/common'
import Header from "@components/biz/Header"
import {headerWrapper} from './styles';

import IndexHero from './src/IndexHero';

const IndexPage : React.FC = (props)=>{
    return (
        <Box>
            <Box sx={headerWrapper}>
                <Header/>
                <IndexHero/>
            </Box>

        </Box>
    )
}

export default IndexPage;




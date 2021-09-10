import React, {forwardRef, Fragment, useState} from 'react';
import IndexPage from '@pages/Index';
import theme from "@root/theme/default";
import {ThemeProvider} from "@emotion/react";


const App: React.FC = (props) => {

    const layoutStyle = {
        margin: "0 auto",
        width: '680px',
    }

    //
    // const [productData, setProductData] = useState([{}]);
    // const productDoms = [];
    // for (let i = 0; i < productData.length; i += 1) {
    //     const productItemData = productData[i];
    //     if (!productItemData) {
    //         continue;
    //     }
    // }

    return (
        <ThemeProvider theme={theme}>
            <IndexPage/>
        </ThemeProvider>
    )
};

export default App;
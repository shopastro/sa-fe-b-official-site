import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import {ThemeProvider,} from '@emotion/react'
import theme from "@theme/default";

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
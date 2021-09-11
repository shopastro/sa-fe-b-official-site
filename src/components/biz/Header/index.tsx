import React from "react"
import {Box} from "@components/common"

// Biz
import Container from "@components/biz/Container"

import Menus from "./src/Menus"
import Logo from "@components/biz/Logo";


const Component: React.FC = () => {
    return (
        <div>
            <Container>
                <Logo sx={{float:'left', paddingRight: "10rem",verticalAlign:'middle',paddingTop:'1.5rem'}}/>
                <Menus sx={{}} />
                <Box sx={{display:'block',clear:'both'}}/>
            </Container>

        </div>
    )
}

export default Component;
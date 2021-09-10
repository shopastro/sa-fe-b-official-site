import React from "react"
import {Box} from "@components/common"

// Biz
import Container from "@components/biz/Container"

import Menus from "./src/Menus"


const Component: React.FC = () => {
    return (
        <div>
            <Container>

                <Menus sx={{}} />
                <Box sx={{display:'block',clear:'both'}}/>
            </Container>

        </div>
    )
}

export default Component;
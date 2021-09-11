import React, {forwardRef, PropsWithChildren} from "react";
import Box from "@components/common/Box";
import mq from "@components/common/mq";

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                maxWidth: "1200px",
                margin: "0 auto",

                [mq[0]]: {
                    paddingLeft: "2rem",
                    paddingRight: '2rem'
                },
                [mq[1]]: {
                    paddingLeft: "2.8rem",
                    paddingRight: '2.8rem'
                },

            }}
        />
    )
};

Component.displayName = 'BizContainer';
export default forwardRef(Component);
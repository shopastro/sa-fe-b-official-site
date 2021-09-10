import React, {forwardRef, PropsWithChildren} from "react";
import Box from "@components/common/Box";

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                maxWidth: "1200px",
                margin:"0 auto"
            }}
        />
    )
};

Component.displayName = 'BizContainer';
export default forwardRef(Component);
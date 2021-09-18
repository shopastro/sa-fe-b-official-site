import React, {forwardRef, PropsWithChildren} from "react";
import Box from "@components/common/Box";

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            ref={ref}
            as='button'
            {...props}
            sx={{
                appearance: 'none',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: 'inherit',
                textDecoration: 'none',
                fontSize: 'inherit',
                backgroundColor: '#2050CB',
                padding: "0.5rem 1rem",
                color: 'white',
                border: 0,
                borderRadius: '80px',
                '&:hover': {
                    cursor: 'pointer'
                }
            }}
        />
    )
};

Component.displayName = 'Button';
export default forwardRef(Component);
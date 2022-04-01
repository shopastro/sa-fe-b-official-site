import React, {forwardRef, PropsWithChildren} from "react";
import Box from "../../common/Box";

const Component:React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {
    return (
        <Box
            ref={ref}
            as='button'
            tx='button'
            variant='primary'
            {...props}
            __css={{
                appearance: 'none',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: 'inherit',
                textDecoration: 'none',
                fontSize: 'inherit',
                px: 3,
                py: 2,
                color: 'white',
                bg: 'primary',
                border: 0,
                borderRadius: 4,
                '&:hover': {
                    cursor: 'pointer'
                }
            }}
        />
    )
};

Component.displayName = 'Button';
export default forwardRef(Component);
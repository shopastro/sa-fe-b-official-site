import React, {Fragment, useImperativeHandle, ForwardRefRenderFunction, forwardRef} from 'react';
const App:  ForwardRefRenderFunction<any, {
    onDelete: Function
}>  = (props,ref) => {

    const {onDelete} = props;
    const formItemStyle = {fontSize: '12px', color: "#333333", marginBottom: '4px', display: 'block'};
    const labelStyle = {
        fontSize: '12px',
        color: '#333333',
        marginBottom: '4px',
        display: 'block',
    };
    const inputStyle = {
        borderRadius: '6px',
        marginBottom: '6px',
        padding: '12px',
        border: '1px solid rgba(50, 50, 93, 0.1)',
        height: '44px',
        fontSize: '16px',
        width: '100%',
        background: 'white'
    };

    const getData = ()=>{

    }
    useImperativeHandle(ref, () => ({
        getData,
    }), [])

    return (
        <h2>ShopAstro</h2>
    )
};

export default forwardRef(App);
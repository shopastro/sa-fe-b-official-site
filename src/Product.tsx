import React, {Fragment, useImperativeHandle, ForwardRefRenderFunction, forwardRef} from 'react';
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
} from '@rebass/forms'
import {Box} from "reflexbox";

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

        <Box sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            alignSelf: 'center',
            boxShadow: '0px 0px 0px 0.5px rgb(50 50 93 / 10%), 0px 2px 5px 0px rgb(50 50 93 / 10%), 0px 1px 1.5px 0px rgb(0 0 0 / 7%)',
            borderRadius: '7px',
            padding: '26px 18px 18px 18px',
            position: 'relative'
        }}>
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        fontSize: '12px', color: "#333333", position: 'absolute', right: '12px', top: "8px",*/}
            {/*        "&:hover":{*/}
            {/*            fontWeight: 'bold',*/}
            {/*            cursor: "pointer"*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    onClick={()=>{*/}
            {/*        console.log('click delete btn')*/}
            {/*        onDelete && onDelete();*/}
            {/*    }}*/}
            {/*>Delete</Box>*/}
            <Box className="product-image-container" sx={{
                float: 'left',
                width: '32%',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
                overflow: 'hidden',
                marginRight: '16px'
            }}>
                <Box as='img' sx={{width: '100%',}}
                     src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343707000"
                     alt=""/>
            </Box>
            <Box className="product-price-editor" sx={{
                overflow: 'hidden',

            }}>
                <Box sx={formItemStyle} className="sp-form-item">
                    <Box sx={labelStyle}
                         htmlFor="priceInput">Price:</Box>
                    <Input sx={inputStyle} type="number" id="priceInput" defaultValue="10.3"/>
                    {/*<div className="sp-form-item">*/}
                    {/*    <label htmlFor="quantityInput">Quantity:</label>*/}
                    {/*    <input type="number" id="quantityInput" value="1">*/}
                    {/*</div>*/}
                </Box>
                <Box sx={formItemStyle}>
                    <Box sx={labelStyle}>Quantity:</Box>
                    <Input sx={inputStyle} type='number' id="quantityInput" defaultValue="1"/>
                </Box>
                <Box sx={formItemStyle}>
                    <Box sx={labelStyle}>SKU_ID:</Box>
                    <Input sx={inputStyle} type='text' id="SKUInput" defaultValue="1"/>
                </Box>
            </Box>
            <Box sx={{display: 'block', clear: "both"}}></Box>
        </Box>
    )
};

export default forwardRef(App);
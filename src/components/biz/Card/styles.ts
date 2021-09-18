export const title = {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: 1.2
}

export const li = {
    fontSize: '1rem',
    lineHeight: 1.2,
    listStyle: 'inside',
}
export const subTitle = {
    fontSize: '12px',
    fontWeight: '900'
}

export const Card = {
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    transform: 'translate(0,0)',
    "&:hover": {
        cursor: 'pointer',
        transform: 'translate(0,-10px)'
    }
    // padding: "24px",
    // color: "#111111",
    // border: '1px solid #CCCCCC',
    // transition: "background 0.3s, border 0.3s",
    // userSelect: "none",
    // position: 'relative',
    // overflow: 'hidden',
    // "& .hover-show": {
    //     transition: "opacity 0.3s",
    // },
    // "&:hover": {
    //     borderColor: "#3179FE",
    //     // color: '#ffffff',
    //     backgroundColor: "#3179FE",
    //     '.afont': {
    //         color: '#ffffff',
    //     },
    //     '.afont svg path': {
    //         fill: '#ffffff'
    //     },
    //     '.hover-show': {
    //         opacity: 1
    //     }
    // }
}
export const img = {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: "translate(-50%,-50%)",
}
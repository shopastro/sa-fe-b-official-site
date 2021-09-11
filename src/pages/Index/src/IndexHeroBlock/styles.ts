import mq from "@components/common/mq";

export const heroContentWrapper = {
    textAlign: 'center',
    paddingTop: '4.29rem',
    minHeight: "35rem",
}

export const h1Title = {
    fontWeight: 800,
    color: '#111111',
    fontSize: '3.4rem',
    lineHeight: 1.28,
    fontFamily: "Alibaba PuHuiTi",
    position:'relative',
    display: 'inline-block',
}
export const highlight = {
    // fontWeight: 600,
    color: '#2050CB',
}

export const h2Title = {
    fontWeight: 500,
    fontSize: '1.3rem',
    lineHeight: 1.2,
    color: '#111111',

    [mq[1]]: {
        fontSize: '2rem',
    }

}

export const heroImgWrapper = {
    width: '100%',
    maxWidth: '980px',
    margin: '0 auto',
    paddingTop: "3.4rem",
    fontSize: '0px',
}

const abE = {
    position: 'absolute',
    display: 'block',
    width: '1.42rem',
    height: '1.42rem',
    backgroundImage: "url(./static/o-o.png)",
    backgroundSize: '200%',
    backgroundRepeat: 'no-repeat',
}

export const xE =  {
    ...abE,
    left: '100%',
    bottom: '0.8rem',
    marginLeft: '0.5rem',
    [mq[1]]:{
        bottom: '-0.7rem',
        marginLeft: '1.28rem',
    }
}

export const yE = {
    ...abE,
    left: '15%',
    top: '-2.7rem',
    backgroundPosition: '100% 0',
    [mq[1]]:{
        top: '-0.7rem',
    }
}
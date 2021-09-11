import mq from "@components/common/mq";
export const title = {
    fontWeight: "600",
    fontSize: "2rem",
    lineHeight: 1.4,
    [mq[1]]:{
        fontSize: "2.57rem",
    }
}

export const subTitle = {
    fontWeight: 600,
    fontSize: "1.2rem",
    lineHeight: 1.4,
    color: '#2050CB',
    [mq[1]]:{
        fontSize: "1.71rem",
    }
}

export const listItem = {
    fontSize: '1.14rem',
    lineHeight: 1.4,
    color: "#666666",
    display: 'inline-block',
    [mq[1]]: {
        display: 'block',
    }
}


export const info = {
    width: '100%',
    paddingTop: '4.1rem',
    paddingBottom: '4.1rem',
    textAlign: 'center',

    [mq[1]]:{
        textAlign: 'left',
        paddingTop: '15rem',
        paddingBottom: '15rem',
        paddingRight: '50%',
    }
}

export const media = {
    width: '100%',
    position: 'static',

    [mq[1]]:{
        width: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
    }

}
import mq from "@components/common/mq";

export const ContentWrapper = {
    textAlign: 'center',
    // minHeight: "500px",
}

export const h1Title = {
    fontWeight: '600',
    fontSize: '2rem',
    color: "#111111",
    lineHeight: '1.2',
    [mq[1]]:{
        fontSize: '2.57rem',
    }
}

export const des = {
    color :"#666666",
    fontSize:"1rem",
    lineHeight: '1.37',
    maxWidth: '80%',
    margin: '0 auto',
    [mq[1]]:{
        fontSize:"1.28rem",
    }
}
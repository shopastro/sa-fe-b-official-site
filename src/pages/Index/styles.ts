import mq from "@components/common/mq";

export const headerWrapper = {
    width: '100%',
    background: 'linear-gradient(89.95deg, rgba(255, 248, 251, 0) 0.83%, rgba(249, 246, 235, 0.417778) 22.51%, rgba(212, 242, 253, 0.24) 60.7%, rgba(205, 243, 255, 0) 99.92%)',
    paddingTop: '5.875rem',
}

export const trafficBannerImg = {
    position: "static",
    width: '100%',
    maxWidth: '946px',
    transform: 'translate(8.5%, 0%)',
    [mq[1]]: {
        position: "absolute",
        width: '65.69%',
        top: '50%',
        right: '0',
        transform: 'translate(8.5%, -50%)',
    },
    [mq[3]]: {
        right: '15%',
        transform: 'translate(0, -50%)',
    }
}

export const cardWrapper = {

    width: '100%',
    padding: '0.71rem',
    display: 'flex',
    [mq[1]]:{
        // float: 'left',

        width: '50%',
        padding: '0.71rem',
    }
}
import mq, {maxMQ} from "@components/common/mq";

export const wrapper = {
    "& .not-odd-items .banner-item":{
        [maxMQ[2]]: {
            width: '50%'
        },
        [maxMQ[0]]: {
            width: '100%'
        }
    },
    "& .odd-items .banner-item":{
        [maxMQ[2]]: {
            width: '100%'
        }
    }
}
export const btn = {
    display: 'inline-block',
    padding: '10px',
    fontSize: "0",
    borderRadius: '500px',
    border: '2px solid #2050CB',
    transition: 'background 0.3s',
    "&:hover": {
        cursor: 'pointer',
        backgroundColor: '#2050CB',
        color: "#ffffff",
        "& .aicon svg path": {
            fill :"#ffffff"
        }
    }
}
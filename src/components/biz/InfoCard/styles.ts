export const title = {
    fontSize: '24px',
    fontWeight: "bold",

    lineHeight: "1.2",
    verticalAlign: 'middle'

}

export const des = {
    color: '#666666',
    fontSize: "14px",
    lineHeight: '1.36',
    marginTop: '10px'
}

export const CardItem = {
    borderRadius: '20px',
    padding: "24px",
    color: "#111111",
    border: '1px solid #CCCCCC',
    transition: "background 0.3s, border 0.3s",
    userSelect: "none",
    position: 'relative',
    overflow: 'hidden',
    "& .hover-show": {
        transition: "opacity 0.3s",
    },
    "&:hover": {
        borderColor: "#3179FE",
        // color: '#ffffff',
        backgroundColor: "#3179FE",
        '.afont': {
            color: '#ffffff',
        },
        '.afont svg path': {
            fill: '#ffffff'
        },
        '.hover-show': {
            opacity: 1
        }
    }
}

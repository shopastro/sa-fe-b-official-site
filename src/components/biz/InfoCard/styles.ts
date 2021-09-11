export const title = {
    fontSize: '1.71rem',
    fontWeight: "bold",
    lineHeight: "1.2",
    verticalAlign: 'middle'

}

export const des = {
    color: '#666666',
    fontSize: "1rem",
    lineHeight: '1.36',
    height: '2.72rem',
    overflow: 'hidden',
    marginTop: '0.71rem'
}

export const CardItem = {
    borderRadius: '1.43rem',
    padding: "1.71rem",
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

export default {
    getDummyLine: (bgColor, width, height) => {
        const style = {
            margin: '10px 0',
            backgroundColor: bgColor,
            height: height ?? "2px",
            width,
            position: 'relative',
            top: '20px',
            display: 'inline-block'
        };

        return(
            <div style={style}></div>
        )
    },
    getVerticalLine: (bgColor, height, width) => {
        const style = {
            margin: '0 10px',
            backgroundColor: bgColor,
            height,
            width: width ?? "2px",
            top: '20px',
            display: 'inline-block'
        };

        return(
            <div style={style}></div>
        )
    }
}
// eslint-disable-next-line react/prop-types
const Display = ({ input }) => {
    console.log(input)
    return (
        <input type="text" readOnly id='cal-input' value={ input} />
    )
}

export default Display;
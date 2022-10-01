import React from "react";

const Input=(props)=> {

    const inputStyle = {
        border: "1px solid blue",
        width: "100%",
        height: props.height? props.height:"2rem",
        paddingLeft: "1rem",
        borderRadius: "10px"
    }

return (
    <input style={inputStyle}></input>
)
}

export default Input;
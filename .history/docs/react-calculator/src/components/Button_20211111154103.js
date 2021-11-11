import React from 'react'

const Button = (props) => {
    return(
        <input className="shadow-lg mx-2"
            type="button"
            value={props.label}
        />
    )
}

export default Button;
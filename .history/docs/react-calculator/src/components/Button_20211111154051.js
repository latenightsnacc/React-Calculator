import React from 'react'

const Button = (props) => {
    return(
        <input className="shadow-xl"
            type="button"
            value={props.label}
        />
    )
}

export default Button;
import React from 'react'

const Button = (props) => {
    return(
        <input className="shadow"
            type="button"
            value={props.label}
        />
    )
}

export default Button;
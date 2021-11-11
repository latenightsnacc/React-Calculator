import React from 'react'

const Button = (props) => {
    return(
        <input className="shadow-lg w-4 py-2 px-4"
            type="button"
            value={props.label}
        />
    )
}

export default Button;
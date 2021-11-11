import React from 'react'

const Button = (props) => {
    return(
        <input className="shadow-lg w-12 m-2 py-2 px-4 hover:bg-blue-500 hover:text-gray-50"
            type="button"
            value={props.label}
        />
    )
}

export default Button;
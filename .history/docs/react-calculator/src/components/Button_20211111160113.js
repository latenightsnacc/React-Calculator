import React from 'react'

const Button = (props) => {
    return(
        <input className="shadow-lg w-12 m-3 py-2 px-4 hover:bg-blue-600  hover:text-gray-50 hover:shadow-2xl"
            type="button"
            value={props.label}
        />
    )
}

export default Button;
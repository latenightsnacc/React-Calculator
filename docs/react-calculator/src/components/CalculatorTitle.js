import React from 'react'

function CalculatorTitle(props) {
    return (
        <div className='my-3 text-xl text-blue-600 font-bold '>
            {props.value}
        </div>
    )
}

export default CalculatorTitle

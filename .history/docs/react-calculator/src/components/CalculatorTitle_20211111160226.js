import React from 'react'

function CalculatorTitle(props) {
    return (
        <div className='my-3 text-lg text-blue-600'>
            {props.value}
        </div>
    )
}

export default CalculatorTitle

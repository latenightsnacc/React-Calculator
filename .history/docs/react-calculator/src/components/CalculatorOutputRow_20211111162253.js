import React from 'react';

const CalculatorOutputRow = () => {
    return(
        <div className="">
            <input className="bg-transparent p-2 my-1 w-full" type="text" value={props.value} readOnly />
        </div>
    )
}

export default CalculatorOutputRow
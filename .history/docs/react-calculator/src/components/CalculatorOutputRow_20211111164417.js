import React from 'react';

const CalculatorOutputRow = (props) => {
    return(
        <div className="">
            <input className="bg-transparent text-black p-2 my-1 w-full" type="text" value={props.value} />
        </div>
    )
}

export default CalculatorOutputRow
import React from 'react';

const CalculatorOutputRow = (props) => {
    return(
        <div className="">
            <input className="bg-transparent text-black font-semibold p-2 my-1 w-full" type="text" value={props.value} />
        </div>
    )
}

export default CalculatorOutputRow
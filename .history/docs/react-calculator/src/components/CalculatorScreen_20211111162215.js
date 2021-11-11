import React from 'react'
import CalculatorOutputRow from './CalculatorOutputRow'

const CalculatorScreen = (props) => {
    return (
        <div className="bg-gray-50 mb-1 rounded flex flex-col items-center justify-center w-full h-28">
            <CalculatorOutputRow value={props.question} />
            <CalculatorOutputRow/>
        </div>
    )
}

export default CalculatorScreen;

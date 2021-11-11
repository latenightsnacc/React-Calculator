import React from 'react'
import CalculatorOutputRow from './CalculatorOutputRow'

const CalculatorScreen = () => {
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center w-full h-28">
            <CalculatorOutputRow/>
            <CalculatorOutputRow/>
        </div>
    )
}

export default CalculatorScreen;

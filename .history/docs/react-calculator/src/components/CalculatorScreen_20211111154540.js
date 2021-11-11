import React from 'react'
import CalculatorOutputRow from './CalculatorOutputRow'

const CalculatorScreen = () => {
    return (
        <div className="bg-gray-50 w-full h-16">
            <CalculatorOutputRow/>
            <CalculatorOutputRow/>
        </div>
    )
}

export default CalculatorScreen;

import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
import CalculatorScreen from './CalculatorScreen'
import Button from './Button'

class Calculator extends Component {
    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="React Calculator" />
                <div className="calculator-body">
                    <CalculatorScreen />
                    <div>
                        Button Row
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator

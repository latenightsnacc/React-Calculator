import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
import CalculatorScreen from './CalculatorScreen'

class Calculator extends Component {
    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="React Calculator" />
                <div className="calculator-body">
                    <CalculatorScreen />
                    <div className="button-row">
                        <
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator

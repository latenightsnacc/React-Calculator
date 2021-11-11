import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
class Calculator extends Component {
    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="React Calculator" />
            </div>
        )
    }
}

export default Calculator

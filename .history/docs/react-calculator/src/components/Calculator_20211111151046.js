import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
import CalculatorOutput

class Calculator extends Component {
    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="React Calculator" />
                <div className="keypad">
                    
                </div>
            </div>
        )
    }
}

export default Calculator

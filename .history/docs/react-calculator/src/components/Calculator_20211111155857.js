import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
import CalculatorScreen from './CalculatorScreen'
import Button from './Button'

class Calculator extends Component {
    render() {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <CalculatorTitle value="Basic React Calculator" />
                <div className="bg-gray-50">
                    <CalculatorScreen />
                    <div className="button-row">
                        <Button label={'Clr'} />
                        <Button label={'Del'} />
                        <Button label={'.'}/>
                        <Button label={'/'}/>
                    </div>
                    <div className="button-row">
                        <Button label={'7'}/>
                        <Button label={'8'}/>
                        <Button label={'9'}/>
                        <Button label={'*'}/>
                    </div>
                    <div className="button-row">
                        <Button label={'4'}/>
                        <Button label={'5'}/>
                        <Button label={'6'}/>
                        <Button label={'-'}/>
                    </div>
                    <div className="button-row">
                        <Button label={'1'}/>
                        <Button label={'2'}/>
                        <Button label={'3'}/>
                        <Button label={'+'}/>
                    </div>
                    <div className="button-row">
                        <Button label={'0'}/>
                        <Button label={'00'}/>
                        <Button label={'%'}/>
                        <Button label={'='}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calculator

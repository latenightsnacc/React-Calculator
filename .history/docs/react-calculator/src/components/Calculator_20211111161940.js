import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
import CalculatorScreen from './CalculatorScreen'
import Button from './Button'

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            question: '',
            answer:''
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        const value = event.target.value;
        switch (value) {
            case '=': {

                if(this.state.question!=='')
                {
                    let ans = '';
                    try {
                        ans = this.eval(this.state.question);
                    }
                    catch(err) {
                        this.setState({answer: 'Math Error'});
                    }
                    if (ans===undefined) 
                        this.setState({answer: 'Math Error'});
                     else 
                        this.setState({answer: ans, question: ''});    
                }
                break;
            }
            case 'Clr' : {
                this.setState({
                    question:'',
                    answer: ''
                });
                break;
            }
            case 'Del': {
                let str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({question: str});
                break;
            }
            default: {
                this.setState({question: this.state.question += value})
                break;
            }
        }
    }
    render() {
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <CalculatorTitle value="Basic React Calculator" />
                <div className="w-full flex flex-col justify-center items-center md:w-80 bg-gray-50">
                    <CalculatorScreen />
                    <div>
                        <Button label={'Clr handleClick={this.handleClick}'} />
                        <Button label={'Del handleClick={this.handleClick}'} />
                        <Button label={'.'} handleClick={this.handleClick}/>
                        <Button label={'/'} handleClick={this.handleClick}/>
                    </div>
                    <div>
                        <Button label={'7'} handleClick={this.handleClick}/>
                        <Button label={'8'} handleClick={this.handleClick}/>
                        <Button label={'9'} handleClick={this.handleClick}/>
                        <Button label={'*'} handleClick={this.handleClick}/>
                    </div>
                    <div>
                        <Button label={'4'} handleClick={this.handleClick}/>
                        <Button label={'5'} handleClick={this.handleClick}/>
                        <Button label={'6'} handleClick={this.handleClick}/>
                        <Button label={'-'} handleClick={this.handleClick}/>
                    </div>
                    <div>
                        <Button label={'1'} handleClick={this.handleClick}/>
                        <Button label={'2'} handleClick={this.handleClick}/>
                        <Button label={'3'} handleClick={this.handleClick}/>
                        <Button label={'+'} handleClick={this.handleClick}/>
                    </div>
                    <div>
                        <Button label={'0'} handleClick={this.handleClick}/>
                        <Button label={'00'} handleClick={this.handleClick}/>
                        <Button label={'%'} handleClick={this.handleClick}/>
                        <Button label={'='} handleClick={this.handleClick}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Calculator

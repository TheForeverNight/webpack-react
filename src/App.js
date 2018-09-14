import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import Form from './Form'

class App extends Component{
    constructor(){
        super();
        this.state = {
            name:'wangjch'
        }
    }

    handleChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    
    render(){
        const {name} = this.state;
        return <div>
            hello {this.state.name}
            <Form name={name} handleChange={ this.handleChange }></Form>
        </div>
    }
}

export default hot(module)(App);
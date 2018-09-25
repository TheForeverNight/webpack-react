import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import Form from './components/form/Form'



class App extends Component{
    constructor(){
        super();
        this.state = {
            name:'wangjch'
        }
    }

    render(){
        return <div>
            <Form name={this.state.name} ></Form>
        </div>
    }
}

export default hot(module)(App);
import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import Count from './components/count';
import AutoFocusTextInput from './components/autoFocusTextInput.js';

class App extends Component{
    constructor(){
        super();
        this.state = {
            name:'wangjch'
        }
    }

    render(){
        return <div>
            <Count />
            <AutoFocusTextInput/>
        </div>
    }
}

export default hot(module)(App);
import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Count from "./components/count";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "wangjch",
            show:false
        };
    }

    toggleShow = () => {
        this.setState({
            show:!this.state.show
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>切换</button>
                {this.state.show ? <Count /> : ''}
            </div>
        );
    }
}

export default hot(module)(App);

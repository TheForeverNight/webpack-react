import React, { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        // this.setState({ count: this.state.count + 1 }, () => {
        //     console.log("回调1this.state.count", this.state.count);
        // });
        //setState是异步更新，以下三次同时执行，访问到的起始值都是0，回调值是1,componentDidUpdate先于setState回调函数执行
        /* this.setState({ count: this.state.count + 1 }, () => {
            console.log("回调2this.state.count", this.state.count);//1
        });
        this.setState({ count: this.state.count + 1 }, () => {
            console.log("回调3this.state.count", this.state.count);//1
        });
        this.setState({ count: this.state.count + 1 }, () => {
            console.log("回调4this.state.count", this.state.count);//1
        }); */
    }

    componentDidUpdate() {
        console.log("componentDidUpdate this.state.count", this.state.count);
    }
    handClick = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log("setState回调函数：", this.state.count);
        });
    };

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button type="button" onClick={this.handClick}>
                    点击
                </button>
            </div>
        );
    }
}

export default Count;

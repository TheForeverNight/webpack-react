import React, { Component } from 'react';

class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handClick = () => {
        this.setState((preState) => {
            return {
                count: preState.count + 1
            }
        },(a,b) => {
            console.log(a,b)
            console.log("回调函数：",this.state.count)
        })

        console.log("直接访问：",this.state.count)
    }

    render(){
        return  <div>
                    <span>{this.state.count}</span>
                    <button type="button" onClick={this.handClick}>点击</button>
                </div>
        
    }
}

export default Count;
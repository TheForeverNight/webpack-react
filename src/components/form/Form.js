import React, { Component } from 'react';
import './form.less'

class Form extends Component {

    handleClick = (e) => {
        console.log(this.name)
    }

    render() {
        const {name,handleChange} = this.props;
        return (
            <div className="form-wrap">
                <input type="text" defaultValue={name} ref={node => this.name=node}/>
                <button type="button" onClick={this.handleClick}>提交</button>
            </div>
        );
    }
}

export default Form;

import React, { Component } from 'react';
import './form.less'

class Form extends Component {
    render() {
        const {name,handleChange} = this.props;
        return (
            <div className="form-wrap">
                <input type="text" defaultValue={name} onChange={handleChange}/>
            </div>
        );
    }
}

export default Form;

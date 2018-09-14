import React, { Component } from 'react';

class Form extends Component {
    render() {
        const {name,handleChange} = this.props;
        return (
            <div>
                <input type="text" defaultValue={name} onChange={handleChange}/>
            </div>
        );
    }
}

export default Form;

import React, { Component } from 'react';
import './form.less'
import PropTypes from 'prop-types'

class Form extends Component {
    constructor(){
        super();
        this.name = React.createRef();
    }

    handleClick = (e) => {
        console.log(this.name.current)
    }

    render() {
        const {name,handleChange} = this.props;
        return (
            <div className="form-wrap">
                <input type="text" defaultValue={name} ref={this.name}/>
                <button type="button" onClick={this.handleClick}>提交</button>
            </div>
        );
    }
}

// Form.propTypes = {
//     children : PropTypes.element.isRequired
// }

export default Form;

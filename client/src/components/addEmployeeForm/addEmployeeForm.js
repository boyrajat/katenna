import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

class AddEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newEmail: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            newName: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.newName);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" newName={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    email:
            <input type="text" newEmail={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Phone:
            <input type="text" newPhone={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    position:
            <input type="text" newPosition={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddEmployeeForm;
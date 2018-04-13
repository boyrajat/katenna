import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './AddEmployeeForm.css';

class AddEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', name: '', email: '', photo: '', position: '', type: '', image: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        // this.setState({ name: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/employees/create', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                data: {
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    position: this.state.position,
                    type: this.state.type,
                    image: this.state.image
                }
            }), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {
            console.log('response URL');
            console.log(res.url);
        })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:'));
    }

    render() {
        return (
            <div className="container" id="AddEmployeeFormContainer">
                <form onSubmit={this.handleSubmit}>

                    <h2 id="formTitle">New Employee</h2>

                    {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Name"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Phone"
                            name="phone"
                            onChange={this.handleChange}
                            value={this.state.phone}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Position"
                            type="position"
                            name="position"
                            onChange={this.handleChange}
                            value={this.state.position}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Type"
                            type="type"
                            name="type"
                            onChange={this.handleChange}
                            value={this.state.type}
                        />
                    </div>
                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Image"
                            type="image"
                            name="image"
                            onChange={this.handleChange}
                            value={this.state.image}
                        />
                    </div>

                    <div>
                        <button id="FormSubmitBtn" label="Create New Employee">Create</button>
                    </div>



                </form>
            </div>
        );
    }
}

export default AddEmployeeForm;

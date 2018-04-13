import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './AddTaskForm.css';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', jobTitle: '', item: '', description1: '', description2: '', description3: '', description4: '', description5: '' };

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
                    Item: this.state.Item,
                    jobTitle: this.state.jobTitle,
                    description1: this.state.description1,
                    description2: this.state.description2,
                    description3: this.state.description3,
                    description4: this.state.description4,
                    description5: this.state.description5,
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
            <div className="container" id="AddTaskFormContainer">
                <form onSubmit={this.handleSubmit}>

                    <h2 id="formTitle">New Task</h2>

                    {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Job Title"
                            name="jobTitle"
                            onChange={this.handleChange}
                            value={this.state.jobTitle}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Item"
                            name="item"
                            onChange={this.handleChange}
                            value={this.state.item}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Description1"
                            name="description1"
                            onChange={this.handleChange}
                            value={this.state.description1}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Description2"
                            name="description2"
                            onChange={this.handleChange}
                            value={this.state.description2}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Description3"
                            name="description3"
                            onChange={this.handleChange}
                            value={this.state.description3}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Description4"
                            name="description4"
                            onChange={this.handleChange}
                            value={this.state.description4}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Description5"
                            name="description5"
                            onChange={this.handleChange}
                            value={this.state.description5}
                        />
                    </div>


                    <div>
                        <button id="FormSubmitBtn" label="Create New Task">Create</button>
                    </div>



                </form>
            </div>
        );
    }
}

export default AddTaskForm;

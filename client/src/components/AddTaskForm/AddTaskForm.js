import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './AddTaskForm.css';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', jobTitle: '', item: '', description: [], item1: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    appendInput() {
        var newInput = `input-${this.state.description.length}`;
        this.setState({ description: this.state.description.concat([newInput]) });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/employees/create', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                data: {
                    Item: this.state.Item,
                    jobTitle: this.state.jobTitle,
                    description: this.state.description
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

            <div className="row justify-content-center">
                <div className="col-8" id="AddTaskFormContainer">

                    <h2 id="addFormTitle">New Task</h2>

                    <form onSubmit={this.handleSubmit} id="addFormSpace">

                        {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

                        <div className="form-group" id="addFieldDiv">

                            <input
                                className="form-control"
                                id="jobTitleInput"
                                type="text"
                                name="jobTitle"
                                onChange={this.handleChange}
                                value={this.state.jobTitle}
                            />
                            <label className="labelInput">Job Title</label>
                        </div>

                        <div className="field-group" id="addFieldDiv">

                            <input
                                className="form-control"
                                id="itemInput"
                                type="text"
                                name="item"
                                onChange={this.handleChange}
                                value={this.state.item}
                            />
                            <label className="labelInput">Item</label>
                        </div>

                        <div className="field-group" id="addFieldDiv">
                            <input
                                className="form-control"
                                id="descriptionInput"
                                type="text"
                                name="item1"
                                onChange={this.handleChange}
                                value={this.state.item1}
                            />
                            <label className="labelInput">Description</label>
                        </div>

                        {this.state.description.map((input, index) =>
                            <div className="field-group" id="addFieldDiv" key={'AddTask' + index}>
                                <input
                                    className="form-control"
                                    id="descriptionInput"
                                    type="text"
                                    name={'input-' + input.length}
                                    onChange={this.handleChange}
                                    value={this.state.description[input.length - 1]}
                                />
                                <label className="labelInput">Description</label>
                            </div>
                        )}
                        <div className="addNewDescriptionDiv">
                            <img id="addNewDescriptionBtn" src="/img/addBtn.svg" onClick={() => this.appendInput()} />
                            <p id="addNewDescriptionText" onClick={() => this.appendInput()}>Add New Task Description</p>
                        </div>
                        <div className="text-center">
                            <button id="FormSubmitBtn" label="Create New Task">Create</button>
                        </div>




                    </form>
                </div>
            </div>
        );
    }
}

export default AddTaskForm;

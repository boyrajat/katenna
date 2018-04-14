import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './AddTaskForm.css';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                value: '',
                name: '',
                supervisor: '',
                tasks: [],
                item: '',
                description: [],
                tempStoreForDescriptions: []
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    appendInput() {
        var newInput = `input-${this.state.description.length}`;
        this.setState({ description: this.state.description.concat([newInput]) });
        // this.setState({ tasks: this.state.description.concat([newInput]) });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('/employees/create', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                data: {
                    item: this.state.name,
                    supervisor: this.state.supervisor,
                    tasks: [this.state.item, JSON.stringify(this.state.description)]
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
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Supervisor"
                            name="supervisor"
                            onChange={this.handleChange}
                            value={this.state.supervisor}
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

                    {this.state.description.map((input, index) =>
                        <div className="field-line" id="fieldDiv">
                            <TextField
                                floatingLabelText={"Description " + (index + 1)}
                                floatingLabelFixed
                                name={'input-' + this.state.description[input.length]}
                                onChange={this.handleChange}
                                value={this.state.description[input.length - 1]}
                            />
                        </div>
                    )}

                    <div>
                        <button id="FormSubmitBtn" label="Create New Task">Create</button>
                    </div>
                    <button onClick={() => this.appendInput()}>
                        CLICK ME TO ADD AN INPUT
               </button>


                </form>

            </div>
        );
    }
}

export default AddTaskForm;

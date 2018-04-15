import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './AddTaskForm.css';

const initialState = {
    value: '',
    name: '',
    supervisor: '',
    description: '',
    steps: [],
};

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        console.log(event.target.name);
        // check if textbox is a description text box
        if (event.target.name.includes('step')) {
            let thisStepIndex = event.target.name;
            // removing the word description from name to get the index of the description field in the form.
            thisStepIndex = thisStepIndex.replace(/steps/g, '');
            // console.log(thisDescriptionIndex);
            this.state.steps[thisStepIndex] = event.target.value;
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }

    }
    appendInput() {
        this.setState({ steps: this.state.steps.concat(['']) });
        // console.log(this.state.description);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('/tasks/create', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                data: {
                    name: this.state.name,
                    supervisor: this.state.supervisor,
                    tasks: [{ item: this.state.description, description: this.state.steps }]
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
            .then(response => {
                console.log('Success:');
                // reset to initial states and create a step field as default
                this.setState(initialState);
                this.appendInput();
            });
    }

    componentDidMount() {
        this.appendInput();
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
                            floatingLabelFixed
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Supervisor"
                            floatingLabelFixed
                            name="supervisor"
                            onChange={this.handleChange}
                            value={this.state.supervisor}
                        />
                    </div>

                    <div className="field-line" id="fieldDiv">
                        <TextField
                            floatingLabelText="Description"
                            floatingLabelFixed
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description}
                        />
                    </div>

                    {this.state.steps.map((input, index) =>
                        <div className="field-line" id="fieldDiv" key={'description' + index}>
                            <TextField
                                floatingLabelText={"Step " + (index + 1)}
                                floatingLabelFixed
                                name={'steps' + index}
                                onChange={this.handleChange}
                            />
                        </div>
                    )}
                    <div>
                        <button type="button" onClick={() => this.appendInput()}>
                            add more steps
                        </button>
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

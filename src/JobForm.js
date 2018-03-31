//JobForm.js 

import React, {Component } from 'react';
import style from './style';

class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '', text: '' };
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTaskChange(e) {
        this.setState({ task: e.target.value });
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.task} entered "${this.state.text}"`)
    }

    render() {
        return (
            <form style={ style.jobForm } onSubmit={ this.handleSubmit }>

            <input
            type = 'text'
            placeholder = 'Enter new Task'
            style = { style.jobFormTask}
            value = { this.state.task }
            onChange = { this.handleTaskChange } />
           
            <input
            type = 'text'
            placeholder = 'Task Description'
            style = { style.jobFormText }
            value = { this.state.text }
            onChange = { this.handleTextChange } />
           

            <input
            type = 'submit'
            style = { style.JobFormPost }
            value = 'Post' />

            </form>
        )
    }
}

export default JobForm;

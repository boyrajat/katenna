//JobDescription.js

import React, { Component } from 'react';
import JobList from './JobList';
import JobForm from './JobForm';
import DATA from './data';
import style from './style';

class JobDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    render() {
        return (
            <div style = { style.jobDescription }>
            <h2>Employee Type </h2>
            <JobList data={ DATA }/>
            <JobForm />
            </div>
        )
    }
}

export default JobDescription;
//JobList.js

import React, { Component } from 'react';
import Job from './Job';
import style from './style';

class JobList extends Component {
    render() {
        let jobNodes = this.props.data.map(job => {
            return (
                <Job task = { job.task } key={ job.id }>
                {job.text}
                </Job>
            )
        })
        return (
            <div style={ style.jobList }>
            { jobNodes }
            </div>
        )
    }
}

export default JobList;
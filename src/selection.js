import React, { Component } from 'react';
import JobDescription from './JobDescription';

import style from './style';

class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = { dept: '' };
        this.selectDept = this.selectDept.bind(this);

    }

    selectDept(e) {
        this.setState({ dept: e.target.value });
        <JobDescription />
    }

    render() {
        return (
        <div>
        <form>
           <button> <input
            type = 'submit'
            style = { style.buttons }
            value = 'Concierge'
            onClick = { this.selectDept } />
            </button>

            <button> <input
            type = 'submit'
            style = { style.buttons }
            value = 'Bellman' 
            onClick = { this.selectDept } />
            </button>

             <button> <input
            type = 'submit'
            style = { style.buttons }
            value = 'Accountant'
            onClick = { this.selectDept } />
            </button>

            </form>
            
            

            </div>
            
           
        )
    }
}

export default Selection;
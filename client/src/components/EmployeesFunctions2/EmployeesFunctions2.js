import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import './EmployeesFunction2.css';

class EmployeesFunctions2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isAssigned: false,
      assignedTasks: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.assignAll = this.assignAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  handleInputChange(index, event) {
    console.log(index);
    console.log(this.assignedTasks);
    console.log(event.target.checked);
    this.setState({
      isAssigned: event.target.checked
    });
    this.state.assignedTasks[index] = event.target.checked;
    console.log(this.state.assignedTasks);
  }

  assignAll() {
    this.setState({ assignedTasks: this.state.assignedTasks.map(() => true) })
  }
  clearAll() {
    this.setState({ assignedTasks: this.state.assignedTasks.map(() => false) })
  }

  saveChanges() {
    const { employeeName, employeeId } = this.props.location.state;
    const newEmployeeId = 'ObjectId("' + employeeId + '")'
    console.log(newEmployeeId);
    fetch('/employees/updatetasks', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        data: {
          sentEmployeeId: employeeId,
          tasks: this.state.assignedTasks
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

  componentDidMount() {
    // received employee position from the employee clicked
    const { employeePosition } = this.props.location.state;
    const { myTasks } = this.props.location.state;
    console.log(myTasks);
    fetch("tasks/dept/" + employeePosition)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            isAssigned: this.props.isAssigned || false,
            assignedTasks: myTasks//hard coded result[0].tasks.map(() => true)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  }

  render() {
    const { error, isLoaded, items } = this.state;
    const { employeeName, backImg } = this.props.location.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <div className="card text-center">
              <div className="card-header black">
                Supervisor {item.supervisor}
                Employee {employeeName}
              </div>
              <img className="card-img-top someRandomClass" src={backImg} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <ul className="list-group list-group-flush">
                  {item.tasks.map((task, index) => (
                    <li className="list-group-item">
                      <p>Task: {task.item}</p>
                      <label>
                        <input
                          type="checkbox"
                          checked={this.state.assignedTasks[index]}
                          name={index}
                          onChange={(e) => { this.handleInputChange(index, e) }} />
                        {this.state.assignedTasks[index] ? 'Unassign?' : 'Assign?'}
                      </label>
                    </li>
                  ))}
                </ul>
                <button type='button' onClick={this.assignAll} >Assign All</button>
                <button type='button' onClick={this.clearAll}>Clear All</button>
                <button type='button'>Add new Task</button>
                <button type='button' onClick={this.saveChanges}>Save</button>
                <Link className="btn btn-secondary" to="/employees" >Go Back</Link>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default EmployeesFunctions2;

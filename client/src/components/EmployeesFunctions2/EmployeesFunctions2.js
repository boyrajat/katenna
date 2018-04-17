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
    // console.log(index);
    // console.log(this.assignedTasks);
    // console.log(event.target.checked);
    this.setState({
      isAssigned: event.target.checked
    });
    this.state.assignedTasks[index] = event.target.checked;
    // console.log(this.state.assignedTasks);
  }

  assignAll() {
    this.setState({ assignedTasks: this.state.assignedTasks.map(() => true) })
  }
  clearAll() {
    this.setState({ assignedTasks: this.state.assignedTasks.map(() => false) })
  }

  // UPDATE DATABASE TASKS ASSIGNED FOR CURRENT EMPLOYEE
  saveChanges() {
    const { employeeName, employeeId } = this.props.location.state;
    const newEmployeeId = 'ObjectId("' + employeeId + '")'
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
    // GETTING DATABASE TASKS FROM BASED ON CURRENT EMPLOYEE POSITION
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
        //PLEASE DONT DELETE THE ERROR FUNCTION!!!!!
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
        <div className="row justify-content-md-center">
          {items.map((item, index) => (
            //=======EMPLOYEE JOB INFORMATION AND PICTURE==========
            <div className="col-10 card employeeTaskCard" key={'assignTask' + index}>
				<div className="row card-header employeeTaskHeader">
					<div className="col-2 employeeTaskImageCol">
						<img className="employeeTaskImg" src={backImg} alt="Employee" />
					</div>
					<div className="col employeeTaskDetailsCol">
						<h1 className="employeeTaskName">{employeeName}</h1>
						<h2 className="employeeTaskJobTitle">{item.name}</h2>
						<h3 className="employeeTaskSuervisor">Supervisor: <span className="employeeTaskSuperName">{item.supervisor}</span></h3>
					</div>
					<div className="col employeeTaskBtnsCol">
					<Link className="employeeTaskGoBackBtn" to="/employees" >Go Back</Link>
					</div>
				</div>
              <div className="card-body employeeTaskBody">
                {/* ======================================== */}
                {/* ALL TASK AND CHECKBOXES ARE DISPLAYED BELOW */}
                <ul className="list-group list-group-flush employeeTaskList">
                  {item.tasks.map((task, index) => (
                    <li className="row employeeTaskEach" key={'assignTaskList' + index}>
                      <p className="col-9 text-left employeeTaskTitle">Task: <span className="employeeTaskSpan">{task.item}</span></p>
					  <div className="col-3 text-right employeeTaskAssigned">
						<label className="employeeTaskLabel" id="checkBoxLabel">
							<input
								className="employeeTaskInput"
								id="eachTaskCheckBox"
							type="checkbox"
							checked={this.state.assignedTasks[index]}
							name={index}
							onChange={(e) => { this.handleInputChange(index, e) }} />
							{this.state.assignedTasks[index] ? 'Unassign?' : 'Assign?'}
						</label>
					  </div>
                    </li>
                  ))}
                </ul>
                {/* END OF TASKS AND CHECKBOXES */}
                {/* ======================================== */}

                {/* ======================================== */}
                {/* ALL BUTTONS ARE DISPLAYED BELOW */}
				<div className="card-footer employeeTaskFooter">
					<button className="employeeTaskFooterBtn" id="employeeTaskAssignAllBtn" type='button' onClick={this.assignAll} >Assign All</button>
					<button className="employeeTaskFooterBtn" id="employeeTaskClearAllBtn" type='button' onClick={this.clearAll}>Clear All</button>
					<button className="employeeTaskFooterBtn" id="employeeTaskAddNewBtn" type='button'>Add new Task</button>
					<button className="employeeTaskFooterBtn" id="employeeTaskSaveBtn" type='button' onClick={this.saveChanges}>Save</button>
				</div>
                {/* END OF BUTTONS */}
                {/* ======================================== */}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default EmployeesFunctions2;

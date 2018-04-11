import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

class EmployeesFunctions2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // receive employee position from this employee
    const { employeePosition } = this.props.location.state;
    fetch("tasks/dept/" + employeePosition)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const { employeeName } = this.props.location.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>

          {items.map(item => (
            <div class="card text-center">
              <div class="card-header black">
                Supervisor {item.supervisor}
                Employee {employeeName}
              </div>
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <ul class="list-group list-group-flush">
                  {item.tasks.map(task => (
                    <li class="list-group-item">Task: {task.item}</li>
                  ))}
                </ul>
                <Link class="btn btn-secondary" to="/employees" >Go Back</Link>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default EmployeesFunctions2;

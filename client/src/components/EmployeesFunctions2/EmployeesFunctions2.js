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
      items: [],
      isAssigned: false
    };
  }

  handleInputChange(e) {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });


    var el = e.target
    var name = el.name
    var type = el.type
    var stateChange = {}

    if (type == 'select-multiple') {
      var selectedOptions = []
      for (var i = 0, l = el.options.length; i < l; i++) {
        if (el.options[i].selected) {
          selectedOptions.push(el.options[i].value)
        }
      }
      stateChange[name] = selectedOptions
    }
  }

  appendInput() {
    this.state.items.tasks.map(item => {
      this.setState({ steps: this.state.steps.concat([true]) });
    }
    )
    // console.log(this.state.description);
  }


  componentDidMount() {
    // received employee position from the employee clicked
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
      );
    //set the initial state for the checkboxes
    appendInput();
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
            <div className="card text-center">
              <div className="card-header black">
                Supervisor {item.supervisor}
                Employee {employeeName}
              </div>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <ul className="list-group list-group-flush">
                  {item.tasks.map((task, index) => (
                    <li className="list-group-item">
                      <p>Task: {task.item}</p>
                      <label>
                        Assign??
                          <input
                          name={"isAssigned" + index}
                          type="checkbox"
                          checked={this.state.isAssigned}
                          onChange={this.handleInputChange} />
                      </label>
                    </li>
                  ))}
                </ul>
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

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

class EmployeesFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("employees/findall")
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <div className="card text-center">
              <div className="card-header">
                {item.position}
              </div>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Phone: {item.phone}</li>
                  <li className="list-group-item">Email: {item.email}</li>
                  <li className="list-group-item">Type: {item.type}</li>
                </ul>
                {/* use the link below to pass state to EmployeeFunctions2 */}
                <Link className="btn btn-secondary" to={{ pathname: '/taskback', state: { employeeName: item.name, employeePosition: item.position } }}>See Tasks</Link>
                <Link className="btn btn-info" to='' >Add New Task</Link>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default EmployeesFunctions;

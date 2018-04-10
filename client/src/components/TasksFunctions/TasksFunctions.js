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

class TasksFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/tasks/findall")
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
                {item.name}
              </div>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Phone: {item.supervisor}</li>
                  {item.tasks.map(tasks => (
                    <div>
                      <li className="list-group-item">Task: {tasks.item}</li>
                      {tasks.description.map(description => (
                        <li className="list-group-item">Description: {description}</li>
                      ))}
                    </div>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default TasksFunctions;

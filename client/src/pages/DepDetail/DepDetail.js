import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
// import { DeleteBtn } from "../../components/DeleteBtn";


class DepDetail extends Component {
  state = {
    tasks: [],
    department: "",
    task: "",
    description: ""
  };
  // When this component mounts, grab the task that have department of this.props.match.params.department
  // e.g. localhost:3000/tasks/dept/Concierge

  componentDidMount() {
    this.loadDepTasks();
  }

  loadDepTasks = () => {
    API.getDepTasks(this.props.match.params.department)
      .then(res =>
        this.setState({ tasks: res.data, department: "", task: "", description: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
         {this.state.tasks.length ? (
              <List>
                {this.state.tasks.map(task => (
                  <ListItem key={task._id}>
                    <Link to={"/tasks/" + task._id}>
                      <strong>
                        {task.department} -Task-  {task.task}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteTask(task._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }
}

export default DepDetail;

import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {Dropdown} from '../../components/Form/Dropdown';

class Tasks extends Component {
  state = {
    Tasks: [],
    department: "",
    task: "",
    description: ""
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ Tasks: res.data, department: "", task: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteTask = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.department && this.state.task) {
      API.saveTask({
        department: this.state.department,
        task: this.state.task,
        description: this.state.description
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter Job Details Here</h1>
            </Jumbotron>
            <form>
              <Dropdown
                value={this.state.department}
                onChange={this.handleInputChange}
                name="department"
                placeholder="Select Department (required)"
              />
              <Input
                value={this.state.task}
                onChange={this.handleInputChange}
                name="task"
                placeholder="Task (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.task && this.state.department)}
                onClick={this.handleFormSubmit}
              >
                Confirm Task
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Entered Job Details</h1>
            </Jumbotron>
            {this.state.Tasks.length ? (
              <List>
                {this.state.Tasks.map(Task => (
                  <ListItem key={Task._id}>
                    <Link to={"/Tasks/" + Task._id}>
                      <strong>
                        {Task.department} -Task-  {Task.task}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteTask(Task._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;

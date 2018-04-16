import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import './TasksFunctions.css';

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
					<div className="accordion" id="accordion eachJobAccordion">
						{items.map((item, index) => (
							<div className="card eachJobCard" key={"card" + index}>
								<div className="card-header eachJobHeader" id={"card" + index}>
									<button
										className="btn eachJobBtn"
										type="button"
										data-toggle="collapse"
										data-target={"#" + item.name}
										aria-expanded="false"
										aria-controls={item.name}
									>
										{item.name}
									</button>
								</div>
								
								<div className="card-body collapse eachJobBody" id={item.name} aria-labelledby={"card" + index} data-parent="#accordion">
									<div className="row align-middle tasksViewTopLinks">
										<h5 className="col-4 align-middle text-left card-title">Supervisor: <span>{item.supervisor}</span></h5>
										<Link className="col-8 align-middle text-right dashViewButtons" id="newTaskBtn" to="/newtask" >
											<p id="addTaskText">Add A New Task<img id="addBtn" src="/img/addBtn.svg" alt="Add A New Task" /></p>
										</Link>
									</div>
									<div className="accordion" id="accordion2 eachTaskAccordion">
										{item.tasks.map((tasks, index) => (
											<div className="card eachTaskCard" key={"task" + index}>
												<div className="card-header eachTaskHeader" id={"task" + index}>
													<button
														className="btn eachTaskBtn"
														type="button"
														data-toggle="collapse"
														data-target={"#" + tasks.item}
														aria-expanded="false"
														aria-controls={tasks.item}
													>
														Task: <span className="taskName">{tasks.item}</span>
													</button>
												</div>
												<div className="card-body eachTaskBody collapse" id={tasks.item} aria-labelledby={"task" + index} data-parent="#accordion2">
													<ul className="descriptionListUL">
														{tasks.description.map((description, index) => (
															<li className="list-group-item eachTaskDescription" key={"description" + index} id={"description" + index}>Description: <span className="eachDescriptionText">{description}</span></li>
														))}
													</ul>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			);
		}
	}

} //end of class

export default TasksFunctions;

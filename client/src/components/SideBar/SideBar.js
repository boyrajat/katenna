import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom'
import JobTitlesList from './JobTitlesList';
import './SideBar.css';

class SideBar extends Component {
	//these (props) are the ones being passed down from Dashboard Page
	constructor(props) { //We set up the props and the state
		super(props); //calls the constructor of the parent ¿? Research more
		this.state = {//whatever I want to pass on to SideBard child
			error: null,
			isLoaded: false,
			showJobTitles: false,
			sideBtnIds: 'sideBarNavMainBtns',
			items: [],
		};
	}

	//HELPER FUNCTIONS to show and hide element on click these are conditional rendering functions
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

	workingFunction() {

		this.setState({ showJobTitles: !this.state.showJobTitles });
		if (this.state.showJobTitles) {
			this.setState({ sideBtnIds: 'sideBarNavMainBtns' });
		} else {
			this.setState({ sideBtnIds: 'sideBarNavMainBtnsDropDown' });
		}
	}
	

	render() {

		const { error, isLoaded, items, showJobTitles, sideBtnIds } = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="col-2" id="sideBarDiv">
					<div id="sideBarTopInfo">
						<img src={this.props.user.userImage} alt="USER" id="userImage" />
						<p id="userName">{this.props.user.name}</p>
					</div>
					<div className="btn-group-vertical" id="sideBarNav">
						<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/employees" >Employees</Link>

						<Link
							className="btn btn-secondary"
							id={sideBtnIds}
							onClick={this.workingFunction.bind(this)}
							to='/task'
						>
							JOB TITLES
						</Link>
						{this.state.showJobTitles ? <JobTitlesList items={this.state.items} /> : null}

						{/* THIS IS WHERE JOB TITLES POPULATE */}


					</div>
				</div>
			);
		}
	}
}

export default SideBar;

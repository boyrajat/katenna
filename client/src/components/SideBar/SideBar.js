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
<<<<<<< HEAD
			error: null,
			isLoaded: false,
			showJobTitles: false,
			items: [],
		};	
	}
=======
>>>>>>> origin

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

	// handleOpenJobTitles() {
	// 	// event.preventDefault();
	// 	// if (this.showJobTitles) {
	// 	// 	this.setState({ showJobTitles: false });
	// 	// } 
	// 	this.setState({showJobTitles: true });	
		
	// 	console.log(this.state.showJobTitles);
	// }
workingFunction(){
			this.setState({ showJobTitles: !this.state.showJobTitles });
			
		console.log(this.state.showJobTitles);
		console.log('frank rox');	
		// if (!this.state.showJobTitles){
		// 	return <JobTitlesList items={this.state.items} style1='display: none;' />
		// } else{
		// 	return <JobTitlesList items={this.state.items} style1='display:content;' />	
		// }
}

	render() {

		const { error, isLoaded, items, showJobTitles } = this.state;

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
							id="sideBarNavMainBtns"
							onClick={this.workingFunction.bind(this)}
							to='/task'
							>
							JOB TITLES
						</Link>	
						{this.state.showJobTitles ? <JobTitlesList items={this.state.items}/> : null }
					
						{/* THIS IS WHERE JOB TITLES POPULATE */}

					
					</div>
				</div>
			);
		}
	}
}

<<<<<<< HEAD
export default SideBar;
=======
SideBar.propTypes = {
	grandpaMoney: PropTypes.string.isRequired
};

export default SideBar;
>>>>>>> origin

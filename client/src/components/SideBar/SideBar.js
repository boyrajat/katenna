<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './SideBar.css';

const SideBar = ({ secretDate, user, grandpaMoney = '1000 dollars' }) => (
	< div className="col-2" id="sideBarDiv" >
		<div id="sideBarTopInfo">
			<img src={user.userImage} alt="USER" id="userImage" />
			<p id="userName">{user.name} {grandpaMoney}</p>
		</div>
		<div className="btn-group-vertical" id="sideBarNav">
			<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/employees" >Employees</Link>
			
			{/* Changing this button down here to "Job Titles", as per our initial layout of app on the whiteboard in the classroom */}
			<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/task" >Job Titles</Link>
		</div>
	</div>
);
=======
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import './SideBar.css';

class SideBar extends Component {
	//these (props) are the ones being passed down from Dashboard Page
	constructor(props) { //We set up the props and the state
		super(props); //calls the constructor of the parent ¿? Research more
		this.state={//whatever I want to pass on to SideBard child

		}
	}

	//Create helper functions to show and hide element on click these are conditional rendering functions

	render() {
		return (
			<div className="col-2" id="sideBarDiv">
				<div id="sideBarTopInfo">
					<img src={this.props.user.userImage} alt="USER" id="userImage" />
					<p id="userName">{this.props.user.name}</p>
				</div>
				<div className="btn-group-vertical" id="sideBarNav">
					<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/employees" >Employees</Link>

					<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/task" >Job Titles</Link>
				</div>
			</div>
		);
	}
}
>>>>>>> origin

SideBar.propTypes = {
	grandpaMoney: PropTypes.string.isRequired
};

export default SideBar;


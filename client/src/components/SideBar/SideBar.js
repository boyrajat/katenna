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

SideBar.propTypes = {
	grandpaMoney: PropTypes.string.isRequired
};

export default SideBar;


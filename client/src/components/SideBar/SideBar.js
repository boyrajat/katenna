import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = ({ secretDate, user }) => (
	<div className="col-2" id="sideBarDiv">
		<div id="sideBarTopInfo">
			<img src={user.userImage} alt="USER" id="userImage" />
			<p id="userName">{user.name}</p>
		</div>
		<div className="btn-group-vertical" id="sideBarNav">
			<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/employees" >Employees</Link>
			{/* Hiding this, since this button shoudl be inside the employees function component
			<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/newemployees" >Add New Employees</Link> */}
			<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/task" >Tasks</Link>
			<Link className="btn btn-secondary" id="sideBarNavMainBtns" to="/newtask" >Add Tasks</Link>
		</div>
	</div >
);

export default SideBar;


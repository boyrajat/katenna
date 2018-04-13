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
			<Link className="btn" id="sideBarNavMainBtns" to="/employees" >Employees</Link>
			<Link className="btn" id="sideBarNavMainBtns" to="/task" >Tasks</Link>
		</div>
	</div>
);

export default SideBar;


import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = () =>
	<div className="col-2" id="sideBarDiv">
		<div id="sideBarTopInfo">
			Something cool here like user photo or something.<br/>
			I need the image info from database here I suppose, plus the current user's name only, not lastname.<br/>
			Please look under katenna/server/static/img/employees for a bunch of 'profile images' we can use.
		</div>
		<div className="btn-group-vertical" id="sideBarNav">
			<Link className="btn" id="sideBarNavMainBtns" to="/employees" >Employees</Link>
			<Link className="btn" id="sideBarNavMainBtns" to="/task" >Tasks</Link>
		</div>
	</div>
;

export default SideBar;


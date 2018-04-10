import React from "react";
import { Link } from "react-router-dom";



const SideBar = () =>
	<div class="btn-group-vertical">
		<Link class="btn btn-secondary" to="/employees" >Employees</Link>
		<Link class="btn btn-secondary" to="/task" >Tasks</Link>
	</div>;

export default SideBar;


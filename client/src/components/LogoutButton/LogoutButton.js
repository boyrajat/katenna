import React from "react";
import { Link } from "react-router-dom";



const LogoutButton = () =>
	<div className="btn-group-vertical">
		<Link className="btn btn-danger" to="/logout" >Logout</Link>
	</div>;

export default LogoutButton;


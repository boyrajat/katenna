import React from "react";
import { Link } from "react-router-dom";



const LogoutButton = () =>
	<div class="btn-group-vertical">
		<Link class="btn btn-danger" to="/logout" >Logout</Link>
	</div>;

export default LogoutButton;


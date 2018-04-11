import React from "react";
import { Link } from "react-router-dom";
import './LogoutButton.css';

const LogoutButton = () =>
	<Link to="/logout" id="logOutClickableArea">
		<img src='/img/logOut.svg' alt="KATENNA" id="logOutBtn"/>
	</Link>
;

export default LogoutButton;


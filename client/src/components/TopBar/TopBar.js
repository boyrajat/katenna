import React from "react";
import { Link } from "react-router-dom";
import Logout from '../LogoutButton';

const TopBar = ({ secretData, user }) =>
	<div className="row">
		<p>this is a Top Bar {secretData} {user.name}</p>
		<Logout />
	</div>;



export default TopBar;


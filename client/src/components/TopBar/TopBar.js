import React from "react";
import { Link } from "react-router-dom";
import Logout from '../LogoutButton';
import './TopBar.css';

const TopBar = ({ secretData, user }) => (
	<div className="row justify-content-between no-gutters" id="topBarRow">
		{/* HIDDING THIS FOR NOW
		<p>this is a Top Bar {secretData} {user.name}</p> */}
		<div className="col-11" id="topBarBrand">
			<Link to="/" id="topBarLink">
				<img src='/img/kIcon.svg' alt="KATENNA" id="katennaIcon" />
			</Link>
			<h1 id="welcomeTitle">Welcome, <strong>{user.name}</strong></h1>
		</div>
		
		<div className="col-1 text-right" id="buttonAlign">
			<Logout />
		</div>

	</div>
);

export default TopBar;


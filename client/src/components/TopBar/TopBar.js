import React from "react";
import { Link } from "react-router-dom";
import Logout from '../LogoutButton';
import './TopBar.css';


let todaysDate = new Date();
let weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let todayDay = weekday[todaysDate.getDay()];


const TopBar = ({ secretData, user }) => (
	<div className="row justify-content-between no-gutters" id="topBarRow">
		{/* HIDING THIS FOR NOW
		<p>this is a Top Bar {secretData} {user.name}</p> */}
		<div className="col-11" id="topBarBrand">
			<Link to="/" id="topBarLink">
				<img src='/img/kIcon.svg' alt="KATENNA" id="katennaIcon" />
			</Link>
			<h1 id="welcomeTitle">Happy {todayDay}!</h1>
		</div>
		
		<div className="col-1 text-right" id="buttonAlign">
			<Logout />
		</div>

	</div>
);

export default TopBar;


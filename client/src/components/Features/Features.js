import React from "react";
import "./Features.css";

const Features = () =>
	<div className="container text-center" id="features">
		<div className="row text-center">
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
				<img src='/img/taskManagement.svg' alt="Feature 1" />
				<h4>Task Manager</h4>
				<p>Manage, create, add, delete and edit tasks and their descriptions for all your employees easily.</p>
			</div>
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
				<img src='/img/chatBot.svg' alt="Feature 2" />
				<h4>Chat Bot</h4>
				<p>Chat bot available 24/7 to answer all your employees questions related to their task or your company.</p>
			</div>
			<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
				<img src='/img/mobile.svg' alt="Feature 3" />
				<h4>Employee Portal</h4>
				<p>Mobile Employee dashboard available 24/7 on the go. Secure employee login.</p>
			</div>
		</div>
	</div>
	;

export default Features;	

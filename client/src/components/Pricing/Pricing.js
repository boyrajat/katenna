import React from "react";
import "./Pricing.css";

const Pricing = () =>
	<div className="container-fluid" id="priceContFlu">
		<div className="container">
			<div className="row">
				<div className="col-12" id="priceText">
					<h3>Pricing / Plans</h3>
					<hr />
					<p>Choose any of the following plans to get start with. You can start with the FREE plan to see our web application at first. You can always change your plan from your account. Choose the product that you really need with our customizable pricing plans!</p>
				</div>
			</div>
			<div className="card-deck" id="cardDiv">
				<div className="card text-center" id="freeCard">
					<div className="card-header">
						FREE
				</div>
					<div className="card-body">
						<h5 className="card-title"><span id="dollar">$</span>0</h5>
						<p className="card-text">Free Trial for 1 month. <br /> Includes access to all features.</p>
						<a href="/">GET STARTED</a>
					</div>
				</div>
				<div className="card text-center" id="smallCard">
					<div className="card-header">
						SMALL BUSINESS
				</div>
					<div className="card-body">
						<h5 className="card-title"><span id="dollar">$</span>499<span id="years">/yr</span></h5>
						<p className="card-text">Access to all features for 3 managers/admins and 10-50 employees.</p>
						<a href="/">GET STARTED</a>
					</div>
				</div>
				<div className="card text-center" id="largeCard">
					<div className="card-header">
						LARGE TEAMS
				</div>
					<div className="card-body">
						<h5 className="card-title"><span id="dollar">$</span>999<span id="years">/yr</span></h5>
						<p className="card-text">For large corporations.<br />Call for more customized pricing options.</p>
						<a href="/">GET STARTED</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	;

export default Pricing;

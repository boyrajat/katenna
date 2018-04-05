import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid align-middle">
	<div className="container align-middle">
		<div className="row jumboSpace align-middle">
			<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 align-middle">
				<h1 className="display-4">Teams come and go. Knowledge never leaves.</h1>
				<p className="lead">The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.</p>
				
					<a className="btn " href="/">Log In</a>

					<a className="btn " href="/">Sign Up</a>

			</div>

			<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center align-middle">
			<img src={process.env.PUBLIC_URL + '/img/desktop.png'} id="desktopImage" alt="Desktop Admin Panel"/>
			</div>
		</div>
	</div>
</div>
);

export default Jumbotron;

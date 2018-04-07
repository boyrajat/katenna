import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
	<div className="container-fluid footerContFlu">
		<div className="row" id="footerDecoration">
			<div className="col-2 bg-1"></div>
			<div className="col-2 bg-2"></div>
			<div className="col-2 bg-3"></div>
			<div className="col-2 bg-4"></div>
			<div className="col-2 bg-5"></div>
			<div className="col-2 bg-6"></div>
		</div>

		<div className="container footerCont">
			<div className="row">

				<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7" id="aboutUs">
					<Link to="/home">
						<img src='/img/kIcon.svg' alt="KATENNA" id="kIcon" />
					</Link>
					<br />
					<p><span>KATENNA</span> was created by Alexander, Charles, Mariela, Melissa and Rajat. We are passionate about building applications which solve problems that have yet to even be discovered on our daily basis. We’d love to show you our solutions, get your feedback and see if we might be a good fit for your organization. Please contact us if you would like to schedule a brief demo.</p>
				</div>

				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5" id="contactForm">
					<h3>GET IN TOUCH</h3>

					<form>
						<div className="form-group row">
							<div className="col-12">
								<div className="input-group">
									<div className="input-group-addon">Name</div>
									<input id="name" name="name" placeholder="Your Full Name" type="text" required="required" className="form-control here" />
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12">
								<div className="input-group">
									<div className="input-group-addon">Email</div>
									<input id="email" name="email" placeholder="email@website.com" type="text" required="required" className="form-control here" />
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12">
								<div className="input-group">
									<div className="input-group-addon">Message</div>
									<textarea id="message" name="message" cols="40" rows="3" required="required" placeholder="We'd love to hear from you." className="form-control"></textarea>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12 text-center">
								<button name="submit" type="submit" className="btn btn-primary" id="contactSubmit">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;

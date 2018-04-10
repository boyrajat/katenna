import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
	return (
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
	)
};

export default ContactForm;
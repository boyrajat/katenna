import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import "./Footer.css";

const Footer = () => (
	<div className="container-fluid footerContFlu" id="contact">
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
					<br/>
					<p>Alexander Lizarraga •&nbsp;
					<Link to="mailto:alexander_lizarraga@ymail.com?Subject=From%20Katenna%20Website" target="_top">Email</Link> •&nbsp;<Link to="https://www.linkedin.com/in/alizarraga" target="_blank">Connect</Link><br/>
					Charles Caldwell •&nbsp;
					<Link to="mailto:polymath.hacker@gmail.com?Subject=From%20Katenna%20Website" target="_top">Email</Link> •&nbsp;<Link to="https://www.linkedin.com/in/thoughtfool" target="_blank">Connect</Link><br/>
					Mariela Pascual •&nbsp;
					<Link to="mailto:mariela2pascual@gmail.com?Subject=From%20Katenna%20Website" target="_top">Email</Link> •&nbsp;<Link to="https://www.linkedin.com/in/marielapascual" target="_blank">Connect</Link><br/>
					Melissa Wolowicz •&nbsp;
					<Link to="mailto:melissa.wolowicz@gmail.com?Subject=From%20Katenna%20Website" target="_top">Email</Link> •&nbsp;<Link to="https://www.linkedin.com/in/mwolowicz" target="_blank">Connect</Link><br/>
					Rajat Narula •&nbsp;
					<Link to="mailto:boyrajat@hotmail.com?Subject=From%20Katenna%20Website" target="_top">Email</Link> •&nbsp;<Link to="https://www.linkedin.com/in/r-narula" target="_blank">Connect</Link></p>
				</div>

				<ContactForm/>
				
			</div>
		</div>
	</div>
);

export default Footer;

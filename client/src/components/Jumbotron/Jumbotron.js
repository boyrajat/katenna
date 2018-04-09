import React from "react";
import "./Jumbotron.css";
import LoginPage from '../../containers/LoginPage';
import SignUpPage from '../../containers/SignUpPage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import routes from './routes.js';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom'

const Jumbotron = () => (
	<div className="jumbotron jumbotron-fluid align-middle">
		<div className="container align-middle">
			<div className="row jumboSpace align-middle">
				<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 align-middle">
					<h1 className="display-4">Teams come and go. Knowledge never leaves.</h1>
					<p className="lead">The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.</p>


					<Link className="btn " to="/login">Log in</Link>
					<Link className="btn " to="/signup">Sign Up</Link>

				</div>

				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center align-middle">
					<img src='/img/desktop.png' id="desktopImage" alt="Desktop Admin Panel" />
				</div>
			</div>
		</div>
	</div>
);

export default Jumbotron;

import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import "./Jumbotron.css";
import LoginPage from '../../containers/LoginPage';
import SignUpPage from '../../containers/SignUpPage';
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


ReactModal.setAppElement('#react-app');

class Jumbotron extends React.Component {

	//STATE
	constructor() {
		super();

		this.state = {
			showModalLogin: false,
			showModalSignup: false
		};

		this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this);
		this.handleOpenModalSignUp = this.handleOpenModalSignUp.bind(this);
		this.handleCloseModalLogin = this.handleCloseModalLogin.bind(this);
		this.handleCloseModalSignup = this.handleCloseModalSignup.bind(this);
	}

	//HELPERS
	handleOpenModalLogin() {
		this.setState({ showModalLogin: true });
		this.setState({ showModalSignup: false });
	}

	handleOpenModalSignUp() {
		this.setState({ showModalSignup: true });
		this.setState({ showModalLogin: false });
	}

	handleCloseModalLogin() {
		this.setState({ showModalLogin: false });
	}

	handleCloseModalSignup() {
		this.setState({ showModalSignup: false });
	}

	//JUMBOTRON RENDERED:
	render() {
		return (
			<div className="jumbotron jumbotron-fluid align-middle" id="modalParent">
				<div className="container align-middle">
					<div className="row jumboSpace align-middle">
						<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 align-middle">
							<h1 className="display-4" id="jumboH1">Teams come and go. Knowledge never leaves.</h1>
							<p className="lead" id="jumboP">The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.</p>

							{/* OLD LINKS */}
							{/* <Link className="btn " to="/login" >Log in</Link>
							<Link className="btn " to="/signup">Sign Up</Link> */}

							{/* NEW BUTTONS FOR THE MODAL */}
							<button className="btn" id="jumboBtn" onClick={() => this.handleOpenModalLogin()}>Log in</button>
							<button className="btn" id="jumboBtn" onClick={() => this.handleOpenModalSignUp()}>Sign Up</button>

							{/* THE MODALS THEMSELVES */}
							<ReactModal
								isOpen={this.state.showModalLogin}
								contentLabel="Modal #1 Global Style Override Example"
								onRequestClose={this.handleCloseModalLogin}
								shouldCloseOnOverlayClick={true}
								shouldCloseOnEsc={true}
								className="Modal"
								overlayClassName="Overlay"
							>

								<img src="/img/modalCloseButton.svg" id="modalClose" onClick={this.handleCloseModalLogin}/>

								{/* THIS IS WHAT IS INSIDE THE MODAL */}
								<LoginPage />

								<div className="noAcctMssg">
									Don't have an account? &nbsp; 
									<span onClick={() => this.handleOpenModalSignUp()}>Create one now</span>
								</div>

							</ReactModal>

							<ReactModal
								isOpen={this.state.showModalSignup}
								contentLabel="Modal #2 Global Style Override Example"
								onRequestClose={this.handleCloseModalSignup}
								shouldCloseOnOverlayClick={true}
								shouldCloseOnEsc={true}
								className="Modal"
								overlayClassName="Overlay"
							>
								<img src="/img/modalCloseButton.svg" id="modalClose" onClick={this.handleCloseModalSignup}/>
								
								<SignUpPage />

								<div className="noAcctMssg">
									Already have an account?  &nbsp; 
									<span onClick={() => this.handleOpenModalLogin()}>Log in</span>
								</div>

							</ReactModal>

						</div>

						<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center align-middle">
							<img src='/img/desktop.png' id="desktopImage" alt="Desktop Admin Panel" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Jumbotron;

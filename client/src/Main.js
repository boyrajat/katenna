import React, { Component } from 'react';

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

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import HomeThing from './pages/Home/Home.js';
import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
  )} />
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    ) : (
        <Component {...props} {...rest} />
      )
  )} />
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )} />
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
            <div className="top-bar" style={{ display: 'none' }}>
              <div className="top-bar-left"  >
                <Link to="/" style={{ fontSize: '16px', color: 'black' }}>Katenna home page</Link>
              </div>
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard" style={{ fontSize: '16px', color: 'black' }}>Dashboard</Link>
                  <Link to="/logout" style={{ fontSize: '16px', color: 'black' }}>Log out</Link>
                </div>
              ) : (
                  <div className="top-bar-right">
                    <Link to="/login" style={{ fontSize: '16px', color: 'black' }}>Log in</Link>
                    <Link to="/signup" style={{ fontSize: '16px', color: 'black' }}>Sign up</Link>
                  </div>
                )}

            </div>

            <PropsRoute exact path="/" component={HomeThing} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage} />
            <Route path="/logout" component={LogoutFunction} />
          </div>

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Main;

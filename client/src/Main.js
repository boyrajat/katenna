import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
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

// importing Pages
import HomeThing from './pages/Home/Home.js';
import LoginPage from './containers/LoginPage';
import LogoutFunction from './containers/Logout';
import SignUpPage from './containers/SignUpPage';
import DashboardPage from './containers/DashboardPage';

// importing authentication
import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();

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
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          {this.state.authenticated ? (
            <PrivateRoute path="/" component={DashboardPage} />
          ) : (
              <div>
                <PropsRoute exact path="/" component={HomeThing} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
                {/* the line below will be used in case that we decide to add a dashboard link to the landing page */}
                {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
                <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
                <LoggedOutRoute path="/signup" component={SignUpPage} />
                {/* leaving the line below in case we want to add a logout button to the homepage */}
                <Route path="/logout" component={LogoutFunction} />
              </div>
            )}
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Main;




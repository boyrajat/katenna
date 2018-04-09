import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import LogoutFunction from '../../containers/Logout';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
    <div className="top-bar-right">
      <Link to="/logout" style={{ fontSize: '16px', color: 'black' }}>Log out</Link>
    </div>
    <div>
      <div>
        <iframe
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/7d304919-0df1-4533-8f13-e7a0e708cddc">
        </iframe>
      </div>
    </div>
    <Route path="/logout" component={LogoutFunction} />
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;

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
import GetTasks from '../EmployeesFunctions2';
import Employees from '../EmployeesFunctions';
import Tasks from '../TasksFunctions';
import SideBar from '../SideBar';


const Dashboard = ({ secretData, user }) => (
  <div className="col-9">
    <div className="container">
      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
      <Route path="/logout" component={LogoutFunction} />
      <Route path="/employees" component={Employees} />
      <Route path="/task" component={Tasks} />
      {/* get employee's tasks when click on button 'See tasks' */}
      <Route path="/taskback" component={GetTasks} />
    </div>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;

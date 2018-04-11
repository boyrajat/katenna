import React from 'react';
import PropTypes from 'prop-types';
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
import './Dashboard.css';


const Dashboard = ({ secretData, user }) => (
    <div className="col-10" id="mainDashContainer">

		{secretData && <h6>Welcome <strong>{user.name}</strong>!<br />{secretData}</h6>}

      <Route path="/logout" component={LogoutFunction} />
      <Route path="/employees" component={Employees} />
      <Route path="/task" component={Tasks} />
      {/* get employee's tasks when click on button 'See tasks' */}
      <Route path="/taskback" component={GetTasks} />
    </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;

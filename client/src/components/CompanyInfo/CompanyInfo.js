import React from "react";
import { Link } from "react-router-dom";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom'


const CompanyInfo = () =>
	<div class="btn-group-vertical">
		<Link class="btn btn-danger" to="/company/findall" >Company Info</Link>
		<Route path="/company/findall" />
	</div>;

export default CompanyInfo;


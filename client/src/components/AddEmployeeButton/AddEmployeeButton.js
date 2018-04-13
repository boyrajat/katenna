import React from "react";
import { Link } from "react-router-dom";
import './AddEmployeeButton.css';

const AddEmployeeButton = () =>
	<Link to="/newemployees" id="logOutClickableArea">
		Add Employee
	</Link>
	;

export default AddEmployeeButton;


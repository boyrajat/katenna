import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './JobTitlesList.css';

const JobTitlesList = ({items,style1}) => (
	<div className="jobTitlesList">
		{items.map(item => (
			<p className="eachJobTitle">
				{item.name}
			</p>
		))}
	</div>
);

JobTitlesList.propTypes = {
	items: PropTypes.array.isRequired,
	style1:PropTypes.string.isRequired
};	

export default JobTitlesList;
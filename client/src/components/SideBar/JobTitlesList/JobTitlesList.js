import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './JobTitlesList.css';

const JobTitlesList = ({ items }) => (
	<div className="jobTitlesList">
		{items.map(item => (
			<p className="eachJobTitle" key={item.name}>
				{item.name}
			</p>
		))}
	</div>
);

JobTitlesList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default JobTitlesList;
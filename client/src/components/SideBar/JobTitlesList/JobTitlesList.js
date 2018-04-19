import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './JobTitlesList.css';

class JobTitlesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: this.props.items,
			textColor: '#FFF'
		}
		this.onMouseover = this.onMouseover.bind(this)
		this.onMouseout = this.onMouseout.bind(this)
	}
	onMouseover(e) {
		this.setState({ textColor: 'white' })
	}
	onMouseout(e) {
		this.setState({ textColor: 'gray' })
	}
	componentWillUpdate() {

	}
	componentDidMount() {
		fetch("/tasks/findall")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}


	render() {
		const { error, isLoaded, items } = this.state;
		// console.log(items);
		if (error) {

			return <div>Error: {error.message}</div>;

		} else if (!isLoaded) {

			return <div>Loading...</div>;

		} else {

			return (
				<div className="jobTitlesList">
					{this.state.items.map((item, index) => (

						<div key={item.name} className="eachJobTitle">
							<Link id="jobTitleLink"
								// style={{ color: this.state.textColor }}
								// onMouseEnter={this.onMouseover.bind(this)}
								// onMouseLeave={this.onMouseout.bind(this)}
								to={"/task/" + index}

							>{item.name}</Link>
						</div>

					))
					}
				</div>
			);
		}

	}
}
JobTitlesList.propTypes = {
	items: PropTypes.array.isRequired,
};
export default JobTitlesList;
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AddEmployeeForm.css';

class AddEmployeeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', name: '', email: '', phone: '', position: '', type: '', image: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// this.setState({ name: event.target.value });
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('/employees/create', {
			method: 'POST', // or 'PUT'
			body: JSON.stringify({
				data: {
					name: this.state.name,
					email: this.state.email,
					phone: this.state.phone,
					position: this.state.position,
					type: this.state.type,
					image: this.state.image
				}
			}), // data can be `string` or {object}!
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(res => {
			console.log('response URL');
			console.log(res.url);
		})
			.catch(error => console.error('Error:', error))
			.then(response => console.log('Success:'));
	}

	render() {
		return (
			<div id="AddEmployeeFormContainer">

				<h2 id="formTitle">Add New Employee</h2>

				<form onSubmit={this.handleSubmit}>
				
					{/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

					<div className="form-group" id="fieldDiv">
						<label>Full Name</label>
						<input
							className="form-control"
							id="nameInput"
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name}
							/>
					</div>

					<div className="form-group" id="fieldDiv">
						<label>Email</label>
						<input
							className="form-control"
							id="emailInput"
							type="email"
							name="email"
							onChange={this.handleChange}
							value={this.state.email}
						/>
					</div>

					<div className="form-group" id="fieldDiv">
						<label>Phone Number</label>
						<input
							className="form-control"
							id="phoneInput"
							type="text"
							name="phone"
							onChange={this.handleChange}
							value={this.state.phone}
						/>
					</div>

					<div className="form-group" id="fieldDiv">
						<label>Employee's Job Title / Position</label>
						<select className="custom-select form-control" id="inputGroupSelect01" onChange={this.handleChange}
							value={this.state.position}>
  						<option selected>Select Job Ttitle/Position (required)</option>
   						<option value="Front Desk">Front Desk</option>
   						<option value="Accountant">Accountant</option>
   						<option value="Bellman">Bellman</option>
						<option value="Housekeeping">Housekeeping</option>
						<option value="Manager">Manager</option>
  						</select>
						
						</div>

					<div className="form-group" id="fieldDiv">
						<label>Employee Type</label>
						<select className="custom-select form-control" id="inputGroupSelect01" onChange={this.handleChange}
							value={this.state.type}>
							<option selected>Select Employee Type (required)</option>
							<option value="Employee">Employee</option>
							<option value="Administrator">Administrator</option>
							</select>

						
					</div>

					<div className="form-group" id="fieldDiv">
						<label>Employee Photo</label>
						<input
							className="form-control"
							id="empImgInput"
							type="text"
							name="image"
							onChange={this.handleChange}
							value={this.state.image}
						/>
					</div>

					<div>
						<button id="FormSubmitBtn" label="Create New Employee">Create New Employee</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddEmployeeForm;

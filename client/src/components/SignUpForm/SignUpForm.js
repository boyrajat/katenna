import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './SignUpForm.css';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <div className="container" id="SignUpFormContainer">
      <form action="/" onSubmit={onSubmit}>
        <h2 id="formTitle">Sign Up</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line" id="fieldDiv">
          <TextField
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </div>

        <div className="field-line" id="fieldDiv">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>

        <div className="field-line" id="fieldDiv">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="FormButtonDiv">
          <button  id="FormSubmitBtn" type="submit" label="Create New Account" primary>Sign Up</button>
        </div>
      </form>
    </div>
  );

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;

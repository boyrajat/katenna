import React from 'react';

// This is the drop down menu option to select the department
// for which the manager needs to enter task

export const Dropdown = props =>
  <div className="form-group">
    <div className="input-group mb-6">
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select className="custom-select form-control" id="inputGroupSelect01" {...props}>
    <option selected>Select Department (required)</option>
    <option value="Front Desk">Front Desk</option>
    <option value="Concierge">Concierge</option>
    <option value="Bellman">Bellman</option>
  </select>
</div>
   
 
 </div>;
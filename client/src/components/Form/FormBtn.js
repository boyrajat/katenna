import React from "react";

// This is the submit "Confirm Task" button to submit the form.

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>;

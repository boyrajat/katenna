import React from "react";

// This is used for the description of tasks.

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>;

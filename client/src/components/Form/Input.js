import React from "react";

// Input component to be reused for Task and Description

export const Input = props =>
  <div className="form-group">
    <input className="form-control" {...props} />
   
 </div>;

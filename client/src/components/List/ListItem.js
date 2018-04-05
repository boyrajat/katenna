import React from "react";

// This creates a list items for each tast entered.

export const ListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;


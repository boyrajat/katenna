import React from "react";
import "./List.css";

// This created the list on the right side with all tasks entered.

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};

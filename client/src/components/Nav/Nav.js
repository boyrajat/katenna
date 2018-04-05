import React from "react";


// Navbar with Katenna link for homepage

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      
      <div className="navbar-header">
      
      <a href="/" className="navbar-brand">
          Katena - Job Descriptions
        </a>
      </div>

  {/* // Links to view each departments task lists  */}
      
      <div className="navbar-header" style={{ float: "right"}}>
      
        <a  href="/tasks/dept/Front Desk" className="navbar-brand">
          Front Desk
        </a>
       
        <a href="/tasks/dept/Concierge" className="navbar-brand">
          Concierge
        </a>

         <a href="/tasks/dept/Bellman" className="navbar-brand">
          Bellman
        </a>

        </div>
    </div>
  </nav>;

export default Nav;

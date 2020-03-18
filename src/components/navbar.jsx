import React from "react";

const Navbar = props => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span
        style={{ fontSize: 30 }}
        className="badge badge-pill badge-secondary"
      >
        Navbar
      </span>
      <span className="badge badge-pill badge-success">
        {props.counters.filter(c => c.value !== 0).length}
      </span>
    </nav>
  );
};

export default Navbar;

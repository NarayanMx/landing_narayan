import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar () {
  

  return (
    <nav className="NavBar">

      <Link to="/" className="NavBar__Link">Link 1</Link>

    </nav>

  );

}

export default NavBar;
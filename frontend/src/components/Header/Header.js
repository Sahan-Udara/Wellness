import React from "react";
import {Link} from "react-router-dom";
import './Header.css'; // Import the CSS file



function Header(){
    return(

      <div>
      <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/addtreatment" className="nav-link">
                  <h1>Add Treatment</h1>
              </Link>
          </li>
          <li className="nav-item">
              <Link to="/viewtreatment" className="nav-link">
                  <h1>View Treatment</h1>
              </Link>
          </li>
      </ul>
  </div>

    )
}

export default Header;
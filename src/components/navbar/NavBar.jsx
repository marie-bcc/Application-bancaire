import React from "react";
import "./Navbar.css";
import logo from "../../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <FontAwesomeIcon
          className="main-nav-item"
          icon={faUserCircle} />
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

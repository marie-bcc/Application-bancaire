import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../Features/auth/authActions";
import { selectToken, selectUserName } from "../../Features/auth/authSlice";
import "./Navbar.css";
import logo from "../../img/argentBankLogo.png";

function NavBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const username = useSelector(selectUserName);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutAsync());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="main-nav-item" to="#">
              <FontAwesomeIcon icon={faUserCircle} /> {username}
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleLogoutClick}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

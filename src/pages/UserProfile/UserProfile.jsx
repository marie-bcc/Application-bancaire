import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../../Features/auth/authActions"; 
import logo from "../../img/argentBankLogo.png";
import "./UserProfile.css";


function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync()); 
    navigate("/HomePage"); 
  };

  return (
    <> 
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
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            
          </Link>
          <Link className="main-nav-item" to="/">
          <button onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default UserProfile;
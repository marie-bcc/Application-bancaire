import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../Features/auth/authActions";
import { selectToken } from "../../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      console.log("Navigating to /userProfile");
      navigate("/userProfile");
    }
  }, [token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password))
      .then((profileData) => {
        console.log("Profile data after login:", profileData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className="main-nav-item" icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginForm;

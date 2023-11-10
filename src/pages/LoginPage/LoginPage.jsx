import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div>
      <NavBar />
      <div className="LoginPage">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

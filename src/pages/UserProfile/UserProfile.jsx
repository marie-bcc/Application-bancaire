import React from "react";
import "./UserProfile.css";
import AccountContent from "./account/AccountContent";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

function UserProfile() {
  return (
    <>
      <NavBar />
      <AccountContent />
      <Footer />
    </>
  );
}

export default UserProfile;

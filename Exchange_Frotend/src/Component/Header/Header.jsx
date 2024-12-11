/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="betweenHeader">
        <img src="/assets/logo.png" />
        <div className="search_icon">
        <img src="/assets/search.svg"/>
        <input type="text" className="search" placeholder="Search Events"/>
        </div>
      </div>
      <div className="betweenHeader">
        <button className="loginbtn">login</button>
        <button className="signupbtn">Signup</button>
      </div>
    </div>
  );
};

export default Header;

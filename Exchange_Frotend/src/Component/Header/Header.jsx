/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./header.css";
import Login from "../../Page/Login/Login";
import { changeSignupValue,changeValue } from "../../Redux/LoginSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  function changeLoginValue(){
    console.log("hua kuch")
    dispatch(changeValue());
  }
  const login = useSelector((state) => state.LoginSlice.value);
  const signup = useSelector((state) => state.LoginSlice.signupValue);
  function changeSignupValuee(){
    dispatch(changeSignupValue());
  }

  useEffect(() => {
    console.log("login",login)  
  },[login,signup])
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
        {!token && <button className="loginbtn" onClick={changeLoginValue}>login</button>}
        {!token &&<button className="signupbtn" onClick={changeSignupValuee}>Signup</button>}
      </div>

    </div>
  );
};

export default Header;

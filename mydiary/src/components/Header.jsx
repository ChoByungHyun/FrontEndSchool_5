import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import Logo from "../image/logo.svg";
import "./Header.module.css"
const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <h1>
          <Link href="./">
            <img className="logo" src={Logo} alt="두근두근 비밀일기" />
          </Link>
        </h1>
        <div>
          <Link to="/signup" className="btn-join">
            회원가입
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dfl9rotoy/image/upload/v1741065300/logo2-removebg-preview_p6juhh.png"
          alt="DB4Cloud"
          className="logo-image"
        />
      </Link>
    </div>
  );
};

export default Logo;

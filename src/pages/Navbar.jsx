import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const path = window.location.pathname;
  return (
    <>
    <nav className="nav">
      <Link to="/" className="site-title">
        Navbar
      </Link>
      <ul>
        <CustomLink to='/contactus'>Contact Us</CustomLink>
        <CustomLink to='/aboutus'>About Us</CustomLink>
      </ul>
    </nav>
    </>
  )
}

const CustomLink = ({to,children, ...props}) => {
  const path = window.location.pathname;
  return (
    <Link to={to} {...props}>
          <li className={path===to?"active":""}>{children}</li>
    </Link>
  )
}

export default Navbar;

import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const path = window.location.pathname;
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Navbar
        </Link>
        <ul>
          <CustomLink to="/contactus">Contact Us</CustomLink>
          <CustomLink to="/aboutus">About Us</CustomLink>
        </ul>
      </nav>
    </>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <li className={isActive ? "active" : ""}>{children}</li>
    </Link>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  const path = window.location.pathname;
  return (
    <>
    <nav className="nav">
      <a href="/" className="site-title">
        Navbar
      </a>
      <ul>
        <CustomLink href='/contactUs'>Contact Us</CustomLink>
        <CustomLink href='/aboutUs'>About Us</CustomLink>
      </ul>
    </nav>
    </>
  )
}

const CustomLink = ({href,children, ...props}) => {
  const path = window.location.pathname;
  return (
    <a href={href} {...props}>
          <li className={path===href?"active":""}>{children}</li>
    </a>
  )
}

export default Navbar;

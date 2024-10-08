import React from "react";

const Navbar = () => {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Navbar
      </a>
      <ul>
        <customLink href="/contactUs"></customLink>
        <forLink href="/contactUs"></forLink>
        <a href="/contactUs">
          <li>Contact Us</li>
        </a>
        <a href="/aboutUs">
          <li>About Us</li>
        </a>
      </ul>
    </nav>
  )
}

function customLink({ href, children, ...props }) {
  return (
    <a href={href}><li>Contact Us</li></a>
  )  
}

const forLink = ({ href, children, ...props }) => {
  return (
    <li><a href={href}>Contact Us</a></li>
  )
}

export default Navbar;

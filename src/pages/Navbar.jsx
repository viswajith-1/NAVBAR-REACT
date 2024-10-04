import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="/" className='site-title'>Site Name</a>
        <ul>
        <li><a href="/contactUs"></a>Contact Us</li>
            <li><a href="/aboutUs"></a>About Us</li>
        </ul>
    </nav>
  )
}

export default Navbar

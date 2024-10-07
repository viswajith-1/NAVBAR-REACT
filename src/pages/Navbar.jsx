import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="/" className='site-title'>Navbar</a>
        <ul>
        <a href="/contactUs"><li>Contact Us</li></a>
        <a href="/aboutUs"><li>About Us</li></a>
        </ul>
    </nav>
  )
}

export default Navbar

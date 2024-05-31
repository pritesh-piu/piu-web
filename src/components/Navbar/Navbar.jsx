import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from '../../assets/logo.png'; // Import the logo image
import menu_icon from '../../assets/menu-icon.png'; // Import the menu icon image
import { Link } from 'react-scroll'; // Import Link component for smooth scrolling

const Navbar = () => {
  // State to manage the sticky navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // Event listener to handle scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false); // Set sticky state based on scroll position
    });
  }, []); // Empty dependency array ensures this effect runs once on mount

  // State to manage the mobile menu visibility
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true); // Toggle mobile menu state
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      {/* Optional logo image */}
      {/* <img src={logo} alt="" className='logo'/> */}
      <h1>Prakash Innovative Universe</h1>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}> Home </Link>
        </li>
        <li>
          <Link to='programs' smooth={true} offset={-190} duration={500}> Services </Link>
        </li>
        {/* <li> <Link to='hero'smooth={true} offset={0} duration={500}> Testimonials</Link> </li> */}
        <li>
          <Link to='about' smooth={true} offset={-120} duration={500}> About Us </Link>
        </li>
        {/* <li> <Link to='hero'smooth={true} offset={0} duration={500}> Career </Link> </li> */}
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>
            <button className='btn'> Contact Us </button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;

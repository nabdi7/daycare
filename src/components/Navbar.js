import React from 'react';

import { Link as ScrollLink } from 'react-scroll';
import logo from '../images/logo-transparent.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
          <a href='/'> 
            <img
              src={logo}
              width='190px'
              height='auto'
              max-width='100%'
              max-height='100%'
              alt='Logo'
            />
          </a>
        </div>
        <div className='navbar-links'>
          <ul>
            <li>
              <ScrollLink to='homeSection' smooth={true} duration={1000}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='aboutSection' smooth={true} duration={1000}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='servicesSection' smooth={true} duration={1000}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='contactSection' smooth={true} duration={1000} className="active">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;

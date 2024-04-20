import React from 'react';

import { Link as ScrollLink } from 'react-scroll';
import logo from '../images/almaas-transparent.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-links-left'>
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
          </ul>
        </div>
        <div className='navbar-logo'>
          <img
            src={logo}
            width='190px'
            height='auto'
            max-width='100%'
            max-height='100%'
            alt='Logo'
          />
        </div>
        <div className='navbar-links-right'>
          <ul>
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
    </div>
  );
};

export default Navbar;

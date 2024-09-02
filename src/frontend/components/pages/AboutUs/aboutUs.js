import React from 'react';
import '../AboutUs/aboutUs.css';
import logoImg from '../../../../img/logo.png';

function AboutUs() {
  return (
    <div>
      <div className="about-us">
        <h1>Despre Noi</h1>
      </div>
      <div className='container'>
        <div className='logo'>
          <img 
            src={logoImg}
            className="img-thumbnail" 
            alt="logo"
          />
        </div>
        <div className="info">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
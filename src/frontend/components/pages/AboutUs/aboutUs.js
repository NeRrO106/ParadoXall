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
        <p>Aici este textul pentru secțiunea Info. Adaugă orice informații relevante pe care dorești să le afișezi aici.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
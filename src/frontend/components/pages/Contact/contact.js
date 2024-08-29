import React from 'react';
import '../Contact/contact.css';
import logoImg from '../../../../img/logo.png';

function contact() {
  return (
    <div>
      <div className="contact">
        <h1>Contacteaza-ne</h1>
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
          <p>Facebook: <a href='https://www.facebook.com/semaforbistro' target="_blank" rel="noopener noreferrer">Link</a></p>
          <p>Telefon: 0724 855 575</p>
          <p>Locatie: Tudor Vladimirescu, Medgidia, Romania, 905600</p>
          <p>Email: lasemafor.medgidia@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default contact;
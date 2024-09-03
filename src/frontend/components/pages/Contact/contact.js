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
          <p>Urmareste-ne: <a href='https://www.facebook.com/semaforbistro' target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p>Telefon: <a href="tel:+40724 855 575">0724 855 575</a> </p>
          <p>Locatie: Tudor Vladimirescu, Medgidia, Romania, 905600</p>
          <p>Email: <a href="mailto:lasemafor.medgidia@gmail.com">lasemafor.medgidia@gmail.com</a> </p>
        </div>
      </div>
    </div>
  );
}

export default contact;
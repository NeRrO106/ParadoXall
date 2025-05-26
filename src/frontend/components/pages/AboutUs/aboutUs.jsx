import React from 'react';
import '../Contact/contact.scss';
import logoImg from '../../../../img/logo.jpg';

function AboutUs() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Despre Noi</h1>
      </div>
      <div className="contact-container">
        <div className='logo'>
          <img 
            src={logoImg}
            className='logo' 
            alt="logo"
          />
        </div>
        <div className="info">
          <p>
            Restaurant Delivery este un site demo modern, construit în React, pentru un restaurant care oferă livrări rapide la domiciliu. Utilizatorii pot consulta meniul, citi informații despre restaurant, contacta echipa și comanda ușor feluri de mâncare direct din paginile produselor. Designul responsive și interfața intuitivă oferă o experiență plăcută pe orice dispozitiv.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
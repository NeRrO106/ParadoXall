import React from 'react';
import '../Contact/contact.css';
import logoImg from '../../../../img/logo.webp';

function AboutUs() {
  return (
    <div>
      <div className="contact">
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
          <p>
          Situat în centrul orașului ce vibrează de energie și râsete de copii, restaurantul nostru îmbină tradiția bucătăriei românești cu modernitatea. 
          <br></br>Fie că îți este poftă de rețetele tradiționale românești sau vrei să încerci preparatele noastre inovatoare , fiecare fel de mâncare este creat cu grijă și pasiune. 
          <br></br>Dacă dorești să încerci ceva unicat, delicioasele Pizzeti vă așteaptă, fiind pregătite cu ingrediente de calitate și grijă la detalii vreau doar sa o salvez atat
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
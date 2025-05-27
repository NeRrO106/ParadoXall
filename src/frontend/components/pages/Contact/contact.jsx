import './contact.scss';
import logoImg from '../../../../img/logo.jpg';

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Contactează-ne</h1>
      </div>
      <div className="contact-container">
        <div className="logo">
          <img className="logo-img" src={logoImg} alt="logo" />
        </div>
        <div className="info">
          <p>Urmărește-ne: <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p>Telefon: </p>
          <p>Locație: <span>Str. Exemplu nr. 123</span></p>
          <p>Email: <a href="mailto:exemplu@email.com">exemplu@email.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

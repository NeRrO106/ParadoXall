import React from "react";
import logoImg from "../../../img/logo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="logo-info">
            <img loading='lazy' src={logoImg} alt="restaurant logo" />
            <p>
              Restaurantul nostru iti livreaza rapid mancare acasa, la birou sau
              oriunde te-ai afla
            </p>
          </div>
          <div className="util-link">
            <p>Link-uri utile:</p>
            <ul>
              <li>
                <a
                  href="https://anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ANPC
                </a>
              </li>
              <li>
                <a href="/termeni-conditii">Termenii si conditii</a>
              </li>
              <li>
                <a href="/politici">Politici de confidentialitate</a>
              </li>
              <li>
                <a href="/info">Informatii livrare</a>
              </li>
              <li>
                <a href="/valori-nutritionale">Valori nutritionale</a>
              </li>
              <li>
                <a href="/alergeni">Alergeni</a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <p>Contact:</p>
            <p>
              Urmareste-ne:{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
            </p>
            <p>
              Email: <a href="mailto:">Gamil</a>{" "}
            </p>
            <p>
              Telefon: <a href="tel:+40787531949">0787531949</a>{" "}
            </p>
            <p>Adresa: </p>
            <p>
              Ore de functionare:
              <span> L-D: 9:00 - 22:00</span>
            </p>
          </div>
          <div className="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22785.07163823079!2d26.040882653613288!3d44.45092437945913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201784e5dc405%3A0xc5e6a8e54ad7b2fa!2sFormer%20Monument%20Island%20Lake%20Morii!5e0!3m2!1sen!2sro!4v1728455900029!5m2!1sen!2sro"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="google maps"
            ></iframe>
          </div>
        </div>
        <div className="legal">
          <p>&copy; 2024 Restaurant Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

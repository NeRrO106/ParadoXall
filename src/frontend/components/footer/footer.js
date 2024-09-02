import React from "react";
import logoImg from '../../../img/logo.png'
import './footer.css'


function Footer(){

    return(
        <footer className='footer'>
            <div className="container-footer">
                <div className="footer-content">
                    <div className="logo-info">
                        <img src={logoImg} alt="restaurant logo"/>
                        <p>ParadoXall iti livreaza rapid mancare acasa, la birou sau oriunde te-ai afla</p>
                    </div>
                    <div className="util-link">
                        <p>Link-uri utile:</p>
                        <ul>
                            <li><a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">ANPC</a></li>
                            <li><a href="/termeni-conditii">Termenii si conditii</a></li>
                            <li><a href="/politici">Politici de confidentialitate</a></li>
                            <li><a href="/info">Informatii livrare</a></li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <p>Contact:</p>
                        <p>Urmareste-ne: <a href="https://www.facebook.com/semaforbistro" target="_blank" rel="noopener noreferrer">Facebook</a> </p>
                        <p>Email: <a href="mailto:lasemafor.medgidia@gmail.com">lasemafor.medgidia@gmail.com</a> </p>
                        <p>Telefon: 0724 855 575</p>
                        <p>Adresa: Tudor Vladimirescu, Medgidia, Romania, 905600</p>
                        <p>
                            Ore de functionare:
                            <span>  L-D: 9:00 - 22:00</span>
                        </p>
                    </div>
                    <div className="google-maps">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.6701823942294!2d28.269210243961425!3d44.2488479092623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ba91a1e4b0386d%3A0xf87ef7a3a1f70ba8!2sParadoXall!5e0!3m2!1sen!2sro!4v1725265105817!5m2!1sen!2sro" 
                            title=""
                            width="300" 
                            height="300" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
                <div className="legal">
                    <p>&copy; 2024 ParadoXall Delivery Medgidia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );

}
export default Footer;
import React, {  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink } from 'react-router-dom';
import './navBar.css';

function NavBar({toggleCart}){
    return(
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom py-3 px-4">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-light fs-3 " to="/">ParadoXall</NavLink>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => ` nav-link fs-5 button-custom ${isActive ? 'active' : ''}`} 
                                aria-current="page" 
                                to="/"
                            >Despre noi</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => ` button-custom nav-link fs-5 ${isActive ? 'active' : ''}`} 
                                to="/meniu"
                            >Meniu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => ` button-custom nav-link fs-5 ${isActive ? 'active' : ''}`} 
                                to="/contact"
                            >Contacteaza-ne</NavLink>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="button-custom nav-link fs-5"
                                onClick={toggleCart}
                            >
                            Cos
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
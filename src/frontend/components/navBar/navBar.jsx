import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss';

function NavBar({ toggleCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink className="brand" to="/">Restaurant Delivery</NavLink>

      <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Despre noi</NavLink>
        <NavLink to="/meniu" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Meniu</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contactează-ne</NavLink>
        <button onClick={() => {
          toggleCart();
          setIsMenuOpen(false);
        }}>Coș</button>
      </div>
    </nav>
  );
}

export default NavBar;

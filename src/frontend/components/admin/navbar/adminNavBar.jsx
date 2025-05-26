import React from "react";
import logoImg from '../../../../img/logo.jpg';
import './navbarAdmin.scss';
import { Link } from 'react-router-dom';

const NavBarAdmin = () => {
  return (
    <header>
      <nav className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-logo">
            <Link to="/" className="brand">
              <img src={logoImg} alt="Logo" />
              <span>Admin Dashboard</span>
            </Link>
          </div>

          <ul className="sidebar-links">
            <li><Link to="/admin/orders"><i className="fas fa-chart-bar"></i> Orders</Link></li>
            <li><Link to="/admin/products"><i className="fas fa-box"></i> Products</Link></li>
            <li><Link to="/admin/password"><i className="fas fa-lock"></i> Password</Link></li>
            <li><Link to="/admin/users"><i className="fas fa-users"></i> Users</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBarAdmin;

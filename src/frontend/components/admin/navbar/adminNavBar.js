import React from "react";
import logoImg from '../../../../img/logo.webp';
import './navbarAdmin.css';
import { Link } from 'react-router-dom';

const NavBarAdmin = () => {
  return (
    <header>
      <nav id="sidebarMenu" className="sidebar bg-dark">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a className="navbar-brand" href="/">
              <img src={logoImg} height="50" alt="Logo" loading="lazy" />
              <span className="text-white"> Admin Dashboard</span>
            </a>
            <Link 
              to="/admin/orders" 
              className="list-group-item list-group-item-action py-2 ripple text-white"
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span>
            </Link>
            <Link 
              to="/admin/products" 
              className="list-group-item list-group-item-action py-2 ripple text-white"
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i><span>Products</span>
            </Link>
            <Link
              href="/admin/password" 
              className="list-group-item list-group-item-action py-2 ripple text-white"
            >
              <i className="fas fa-lock fa-fw me-3"></i><span>Password</span>
            </Link>

            <Link
              href="/admin/users" 
              className="list-group-item list-group-item-action py-2 ripple text-white"
            >
              <i className="fas fa-users fa-fw me-3"></i><span>Users</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarAdmin;

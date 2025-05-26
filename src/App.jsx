import './App.scss';
import React, { useState } from 'react';
import NavBar from './frontend/components/navBar/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutUs from './frontend/components/pages/AboutUs/aboutUs';
import Meniu from './frontend/components/pages/Meniu/meniu';
import Contact from './frontend/components/pages/Contact/contact';
import ProductPage from './frontend/components/pages/ProductPage/ProductPage';
import CartPage from './frontend/components/pages/Cart/CartPage';
import { CartProvider } from './frontend/components/pages/Cart/Cart';
import Checkout from './frontend/components/pages/CheckOut/CheckOut';
import Footer from './frontend/components/footer/footer';
import Politici from './frontend/components/footer/politici';
import Termeni from './frontend/components/footer/termeni';


/* Admin panel */
import Admin from './frontend/components/admin/admin';
import NavBarAdmin from './frontend/components/admin/navbar/adminNavBar';
import { AuthProvider } from './frontend/components/admin/auth/AuthContext';
import LoginPage from './frontend/components/admin/auth/Login';
import PrivateRoute from './frontend/components/admin/auth/PrivateRoute';


function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route
              path="/*"
              element={
                <div className="page-wrapper">
                  <NavBar toggleCart={toggleCart} />
                  <main className="main-content">
                    <Routes>
                      <Route path="/" element={<AboutUs />} />
                      <Route path="meniu" element={<Meniu />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="product/:productId" element={<ProductPage toggleCart={toggleCart} />} />
                      <Route path="checkout" element={<Checkout />} />
                      <Route path="politici" element={<Politici />} />
                      <Route path="termeni-conditii" element={<Termeni />} />
                    </Routes>
                    <CartPage isOpen={isCartOpen} onClose={toggleCart} />
                  </main>
                  <Footer />
                </div>
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route
              path="/admin/*"
              element={
                <>
                  <PrivateRoute>
                    <NavBarAdmin />
                    <Admin />
                  </PrivateRoute>
                </>
              }
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

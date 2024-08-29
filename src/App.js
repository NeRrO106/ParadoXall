import './App.css';
import React, { useState } from 'react';
import NavBar from './frontend/components/navBar/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutUs from './frontend/components/pages/AboutUs/aboutUs';
import Meniu from './frontend/components/pages/Meniu/meniu';
import Contact from './frontend/components/pages/Contact/contact';
import ProductPage from '../src/frontend/components/pages/ProductPage/ProductPage';
import CartPage from './frontend/components/pages/Cart/CartPage';
import { CartProvider } from './frontend/components/pages/Cart/Cart';
import Checkout from './frontend/components/pages/CheckOut/CheckOut';


function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <Router>
        <CartProvider>
          <NavBar toggleCart={toggleCart}/>
          <Routes>
            <Route path = "/" element={<AboutUs />} />
            <Route path = "meniu" element={<Meniu />} />
            <Route path = "contact" element={<Contact />} />
            <Route path = "product/:productId" element={<ProductPage toggleCart={toggleCart}/>} />
            <Route path = "checkout" element={<Checkout/>} />
          </Routes>
          <CartPage isOpen={isCartOpen} onClose={toggleCart}/>
        </CartProvider>
    </Router>
  );
}

export default App;

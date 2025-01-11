import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsAdmin from './products';
import OrdersAdmin from './orders';
import EditProductPage from './EditProductPage';
import AddProductPage from './AddProductPage';

const Admin = () =>{
    return (
        <div>
          <Routes>
            <Route path="/products" element={<ProductsAdmin />} />
            <Route path='/products/edit/:productId' element={<EditProductPage />} />
            <Route path='/products/add/' element={<AddProductPage/>}/>
            <Route path="/orders" element={<OrdersAdmin/>} />
          </Routes>
        </div>
      );
    
};

export default Admin;
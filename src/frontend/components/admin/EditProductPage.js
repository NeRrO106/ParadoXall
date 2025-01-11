import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditProductForm from './editProduct';

const EditProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleUpdateSuccess = (updatedProduct) => {
    navigate('/admin/products'); 
  };

  return (
    <div className='edit-product-admin-form'>
      <h1>Editează Produsul</h1>
      <EditProductForm productId={productId} onUpdateSucces={handleUpdateSuccess} />
    </div>
  );
};

export default EditProductPage;

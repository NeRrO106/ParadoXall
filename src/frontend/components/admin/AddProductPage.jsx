import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddProductForm from './addProduct';

const AddProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleAddSuccess = (addedProduct) => {
    navigate('/admin/products'); 
  };

  return (
    <div className='edit-product-admin-form'>
      <h1>Adauga Produs</h1>
      <AddProductForm productId={productId} onAddSucces={handleAddSuccess} />
    </div>
  );
};

export default AddProductPage;

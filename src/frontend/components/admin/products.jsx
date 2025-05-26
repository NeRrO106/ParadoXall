import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./productsAdmin.scss";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${apiUrl}products/`;
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products', error));
  }, [apiUrl]);

  const handleEdit = (productId) => {
    navigate(`/admin/products/edit/${productId}`);
  };

  const handleAdd = () => {
    navigate('/admin/products/add/');
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Sigur vrei să ștergi acest produs?')) {
      try {
        const response = await fetch(`${apiUrl}delete-product/${productId}/`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          alert('Produsul a fost șters cu succes!');
          setProducts(products.filter(p => p.product_id !== productId));
        } else {
          alert('A apărut o eroare la ștergerea produsului.');
        }
      } catch (error) {
        alert('A apărut o problemă de rețea.');
      }
    }
  };

  return (
    <div className="admin-products-page">
      <div className="main-admin">
        <h1>Produse</h1>
        <button className="btn-add-product" onClick={handleAdd}>Adaugă Produs</button>
      </div>

      <div className="products-container">
        {products.map(product => (
          <div key={product.product_id} className="product-item">
            <img src={product.image_url} alt={product.name} />
            <div className="product-credential">
              <h5>Nume: {product.name}</h5>
              <p>Descriere: {product.description}</p>
              <p>Subcategorie: {product.sub_description}</p>
              <p>Categorie: {product.category}</p>
              <p>Preț: {product.price} lei</p>
              <div className="btn-container">
                <button className="btn-edit" onClick={() => handleEdit(product.product_id)}>
                  ✏️
                </button>
                <button className="btn-delete" onClick={() => handleDelete(product.product_id)}>
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAdmin;

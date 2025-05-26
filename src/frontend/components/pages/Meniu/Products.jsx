import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.scss';

const ProductList = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiUrl}products/`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Eroare:', error));
  }, [apiUrl]);

  useEffect(() => {
    if (filter === 'all') setFilteredProducts(products);
    else setFilteredProducts(products.filter(p => p.category === filter));
  }, [filter, products]);

  const handleClick = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div className="product-card" key={product.product_id}>
          <img src={product.image_url} alt={product.name} />
          <div className="card-body">
            <h5>{product.name}</h5>
            <p>Preț: {product.price} lei</p>
            <button onClick={() => handleClick(product.product_id)}>Vezi produsul</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

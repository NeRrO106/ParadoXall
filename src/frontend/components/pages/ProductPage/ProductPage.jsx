import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductPage/ProductPage.scss';
import { useCart } from '../Cart/Cart';

const ProductPage = ({ toggleCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Selectează opțiune');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}products/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [productId, apiUrl]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      ...product,
      productId,
      quantity,
      selectedOption,
    });
    toggleCart(false);
  };

  if (!product) return <div className="product-page">Loading...</div>;

  return (
    <div className="product-page" style={{ backgroundImage: `url(${product.image_url})` }}>
      <div className="header">
        <h1>{product.name}</h1>
      </div>
      <div className="product-content">
        <div className="image-section">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="details-section">
          <div className="description">
            <p>Ingrediente:</p>
            <p>{product.description}</p>
          </div>

          {product.sub_description === 'pui-vita' && (
            <div className="dropdown">
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option disabled>Selectează opțiune</option>
                <option value="Pui">Pui</option>
                <option value="Vita">Vita</option>
              </select>
            </div>
          )}

          <div className="quantity-container">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <div className="price-container">
            <p><strong>Preț:</strong> {product.price} lei</p>
            <button className="btn-add" onClick={handleAddToCart}>Adaugă în coș</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

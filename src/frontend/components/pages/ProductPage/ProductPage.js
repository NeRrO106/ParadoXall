import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductPage/ProductPage.css';
import { useCart } from '../Cart/Cart';

const ProductPage = ({ toggleCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Selecteaza optiune');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async() => {
            try {
                const response = await fetch('https://paradoxall-80370d8dd2e4.herokuapp.com/api/products/');
                const data = await response.json();
                const foundProduct = data.find(p => p.product_id === parseInt(productId));
                setProduct(foundProduct);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleSelectedOption = (option) => {
        setSelectedOption(option);
    };

    const incrementQuantity = () => setQuantity(q => q + 1);
    const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    const handleAddToCart = () => {
        if (product) {
            addToCart({ ...product, quantity, selectedOption });
            toggleCart();
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                margin: 0,
                padding: 0,
                backgroundImage: `url(${product.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <div className="header">
                <h1>{product.name}</h1>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image_url} className="img-fluid" alt={product.name} />
                    </div>
                    <div className="col-md-6">
                        <div className="description">
                            <p>Ingrediente:</p>
                            <p>{product.description}</p>
                        </div>
                        {product.category === 'ciorbe' && (
                            <div className="dropdown">
                                <button
                                    className="btn dropdown-custom dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {selectedOption}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleSelectedOption('Pui')}>Pui</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleSelectedOption('Vita')}>Vita</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <div className="quantity-container">
                            <button className="btn-custom-quantity" onClick={decrementQuantity}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button className="btn-custom-quantity" onClick={incrementQuantity}>+</button>
                        </div>
                        <div className="price-container">
                            <p className="price"><strong>Pret:</strong> {product.price} lei</p>
                            <button
                                type="button"
                                className="btn btn-custom-product"
                                onClick={handleAddToCart}
                            >
                                Adauga in cos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

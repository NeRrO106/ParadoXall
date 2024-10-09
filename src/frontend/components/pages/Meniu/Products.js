import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Meniu/Products.css';

const ProductList = ({ filter }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(20); // Numărul de produse vizibile
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const url = `${apiUrl}/products/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data.slice(0, visibleCount)); // Începe cu un număr de produse vizibile
            })
            .catch(error => console.error('Error fetching products', error));
    }, [apiUrl, visibleCount]);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredProducts(products.slice(0, visibleCount));
        } else {
            setFilteredProducts(products.filter(product => product.category === filter).slice(0, visibleCount));
        }
    }, [filter, products, visibleCount]);

    const loadMoreProducts = useCallback(() => {
        if (loading || filteredProducts.length >= products.length) return; // Previne încărcarea dacă toate produsele sunt deja vizibile
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + 10); // Crește numărul de produse vizibile
            setLoading(false);
        }, 1000);
    }, [loading, filteredProducts.length, products.length]);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) return;
        loadMoreProducts();
    }, [loadMoreProducts]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleClick = (productId) => {
        window.scrollTo(0, 0);
        navigate(`/product/${productId}`);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-4" key={product.product_id}>
                        <div className="card">
                            <img 
                                src={product.image_url} 
                                className="card-img-top" 
                                alt={product.name} 
                                width="95%"
                                height="200px"   
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Pret: {product.price} lei</p>
                                <button
                                    className="btn btn-custom-card"
                                    onClick={() => handleClick(product.product_id)}
                                >
                                    Vezi produsul
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <p>Se incarca mai multe produse...</p>}
        </div>
    );
};

export default ProductList;

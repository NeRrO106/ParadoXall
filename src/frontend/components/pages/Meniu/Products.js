import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Meniu/Products.css';

const ProductList = ({ filter }) =>{
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(() =>{
        const url = `${apiUrl}/products/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data.slice(0,20));
            })
            .catch(error => console.error('Error fetchin products', error));

    },[apiUrl]);

    useEffect(() =>{
        if(filter === 'all'){
            setFilteredProducts(products.slice(0,20));
        }
        else{
            setFilteredProducts(products.filter(product => product.category === filter).slice(0,20));
        }
    }, [filter, products])

    const loadMoreProducts = useCallback(() =>{
        if(loading) return;
        setLoading(true);
        setTimeout(() =>{
            setFilteredProducts(prev => [
                ...prev,
                ...products.slice(prev.length, prev.length + 10)
            ]);
            setLoading(false);
        }, 1000);
    }, [loading, products]);

    const handleScroll = useCallback(() =>{
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        loadMoreProducts();
    }, [loadMoreProducts]);

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleClick = (productId) => {
        window.scrollTo(0, 0);
        navigate(`/product/${productId}`);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-4 mb-4" key={product.product_id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img loading="lazy" src={product.image_url} className="card-img-top" alt={product.name}/>
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
export default ProductList
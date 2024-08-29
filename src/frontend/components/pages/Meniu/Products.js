import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Meniu/Products.css';

const ProductList = ({ filter }) =>{
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() =>{
        const url = 'http://127.0.0.1:8000/api/products/';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(error => console.error('Error fetchin products', error));
    },[]);

    useEffect(() =>{
        if(filter === 'all'){
            setFilteredProducts(products);
        }
        else{
            setFilteredProducts(products.filter(product => product.category === filter));
        }
    }, [filter, products])

    const handleClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-4 mb-4" key={product.product_id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={product.image_url} className="card-img-top" alt={product.name}/>
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
        </div>
    );

};
export default ProductList
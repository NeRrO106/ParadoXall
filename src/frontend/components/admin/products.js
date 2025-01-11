import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./productsAdmin.css";

const ProductsAdmin = () =>{

    const [products, setProducts] = useState([]);
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const navigate = useNavigate();

    useEffect(()=>{
        const url = `${apiUrl}/products/`;
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products', error));
    }, [apiUrl]);

    const handleEdit = (productId) => {
        navigate(`/admin/products/edit/${productId}`);
    };

    const handleAdd = ()=>{
        navigate('/admin/products/add/');
    }

    const handleDelete = async (productId) =>{
        if(window.confirm('Sigur vrei sa stergi acest produs?')){
            try{
                const response = await fetch(`${apiUrl}/delete-product/${productId}/`,{
                    method: 'DELETE',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                });
                if(response.ok){
                    alert('Produsul a fost sters cu succes!');
                }
                else {
                    console.error('Eroare la ștergere');
                    alert('A apărut o eroare la ștergerea produsului.');
                }
            }
            catch (error) {
                console.error('Eroare de rețea:', error);
                alert('A apărut o problemă de rețea.');
            }
        }
    };

    return(
        <div className="admin-products-page">
            <div className="main-admin">
                <h1>Products</h1>
                <button className="btn btn-custom btn-custom-product-admin" onClick={()=>handleAdd()}>Add Products</button>
            </div>
            <div className="products-container ">
                    {products.map(product =>(
                        <div key={product.product_id}>
                            <div className="product-item bg-dark">
                                <img 
                                    src={product.image_url} 
                                    alt={product.name}   
                                />
                                <div className="product_credential">
                                    <h5 className="">Name: {product.name}</h5>
                                    <p className="">Descriere: {product.description}</p>
                                    <p className="">Sub_Category: {product.sub_description}</p>
                                    <p className="">Category: {product.category}</p>
                                    <p className="">Pret: {product.price} lei</p>
                                    <div className="btn-container">
                                        <button className="btn btn-custom btn-edit" onClick={() => handleEdit(product.product_id)}><i className="fas fa-edit"></i></button>
                                        <button className="btn btn-custom btn-delete" onClick={() => handleDelete(product.product_id)}><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default ProductsAdmin;
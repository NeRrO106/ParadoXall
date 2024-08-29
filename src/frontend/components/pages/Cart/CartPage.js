import React from 'react';
import { useCart } from './Cart';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const calculateSubtotal = () =>{
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    const subTotal = calculateSubtotal();

    const handleCheckout = () =>{
        onClose();
        navigate("/checkout");
    }

    return (
        <div>
            <div className={`cart-panel ${isOpen ? 'open' : 'closed'}`}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h1>Coșul de Cumpărături</h1>
                {cartItems.length === 0 ? (
                    <p className='text'>Coșul tău este gol.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p>{item.name}</p>
                                    <p>{item.quantity} x {item.price} lei</p>
                                    <p>{item.selectedOption}</p>
                                    <button 
                                        className="btn-remove" 
                                        onClick={() => removeFromCart(item.product_id)}
                                    >
                                        Șterge
                                    </button>
                                </div>
                            </li>
                        ))}
                        <div className="button-container">
                            <p>Subtotal:{subTotal} lei</p>
                            <button className="btn btn-custom-cart" onClick={() => handleCheckout()}>Finalizeaza comanda</button>
                        </div>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartPage;
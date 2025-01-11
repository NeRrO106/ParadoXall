import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const defaultCard = [];

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(defaultCard);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart'));
        if(items){
            setCartItems(items);
        }
    }, []);

    useEffect(() => {
        if(cartItems !== defaultCard){
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(
                p => Number(p.productId) === Number(product.productId) 
                && p.selectedOption === product.selectedOption
            );
    
            if (existingItem) {
                return prevItems.map(p => 
                    Number(p.productId) === Number(product.productId) && p.selectedOption === product.selectedOption
                        ? { ...p, quantity: p.quantity + product.quantity }
                        : p
                );
            } else {
                return [...prevItems, product];
            }
        });
    };
    

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
    };

    const clearCart = () => {
        setCartItems(defaultCard);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

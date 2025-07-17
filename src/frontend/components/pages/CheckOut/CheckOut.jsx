import React, { useState } from 'react';
import { useCart } from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import './CheckOut.scss';

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        street: '',
        block: '',
        nr: '',
        city: 'Oras',
        region: 'Judet',
        info: '',
        paymentMethod: 'cash',
        deliveryMethod: 'delivery',
        acceptTerms: false,
        newsLetter: false,
    });

    const minimumOrders = {
        "localitatea 1": 0,
        "localitatea 2": 0
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const subTotal = calculateSubtotal();

    const handleCheckOut = async (e) => {
        e.preventDefault();
        let message = '';

        if (!formData.name) message = 'Te rog sa introduci numele tau!';
        else if (!formData.email) message = 'Te rog sa introduci email-ul tau!';
        else if (!formData.phoneNumber) message = 'Te rog sa introduci numarul de telefon!';
        else if (formData.deliveryMethod === 'delivery' && (!formData.street || !formData.nr || !formData.city)) {
            message = 'Te rog completeaza datele de livrare';
        }
        else if (!formData.acceptTerms) {
            message = 'Trebuie sa accepti termenii si conditiile!';
        }

        if (formData.deliveryMethod === 'delivery') {
            const cityKey = formData.city.toLowerCase();
            if (minimumOrders[cityKey] && subTotal <= minimumOrders[cityKey]) {
                message = `Comanda minima pentru localitatea ${formData.city} este de ${minimumOrders[cityKey]} lei.`;
            }
        }

        if (message) {
            window.scrollTo(0, 0);
            setError(message);
            return;
        }

        const fullAddress = `Strada: ${formData.street}, Bloc: ${formData.block}, Numar: ${formData.nr}`;
        const orderData = {
            customer_name: formData.name,
            phone_number: formData.phoneNumber,
            email: formData.email,
            delivery_method: formData.deliveryMethod,
            address: formData.deliveryMethod === 'pickup' ? 'ridicare' : fullAddress,
            city: formData.deliveryMethod === 'pickup' ? 'ridicare' : formData.city,
            region: formData.region,
            payment_methods: formData.paymentMethod,
            additional_info: formData.info,
            total_amount: subTotal,
            notifications: formData.newsLetter ? 'yes' : 'no',
            is_completed: 'no',
            order_items: cartItems.map(item => ({
                product: Number(item.productId),
                quantity: item.quantity,
                selected_option: item.selectedOption || ''
            }))
        };

        try {
            const response = await fetch(`${apiUrl}/create-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(orderData)
            });
            const textResponse = await response.text();
            const data = JSON.parse(textResponse);

            if (response.ok) {
                clearCart();
                navigate("/");
            } else {
                setError(data.message || 'Eroare la plasarea comenzii');
            }
        } catch (error) {
            console.error(error);
            setError('Eroare la plasarea comenzii');
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
        return '';
    };

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <h1>Finalizeaza comanda</h1>
            </div>

            <div className="checkout-content">
                <div className='border'>
                    <ul className="custom-ul">
                        <p>Cosul tau</p>
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image_url} alt={item.name} />
                                <div className="item-details">
                                    <p>{item.name}</p>
                                    <p>{item.quantity} x {item.price} lei</p>
                                    <p>{item.selectedOption}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className='subtotal-custom'>Subtotal: {subTotal} lei</p>
                </div>

                <div className='checkout-form-container'>
                    <form className='checkout-form' onSubmit={handleCheckOut}>
                        {error && <div className="error-msg">{error}</div>}

                        <div className="form-group">
                            <label htmlFor="name">Nume(*)</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email(*)</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Număr de Telefon(*)</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="deliveryMethod">Modalitate de livrare</label>
                            <select id="deliveryMethod" name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
                                <option value="delivery">La domiciliu</option>
                                <option value="pickup">Ridicare personala</option>
                            </select>
                        </div>

                        {formData.deliveryMethod === 'delivery' && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="street">Strada(*)</label>
                                    <textarea id="street" name="street" value={formData.street} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="block">Bloc</label>
                                    <textarea id="block" name="block" value={formData.block} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nr">Numar/Apartament(*)</label>
                                    <textarea id="nr" name="nr" value={formData.nr} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">Localitate(*)</label>
                                    <select id="city" name="city" value={formData.city} onChange={handleChange}>
                                        <option value="Localitatea 1">Localitatea 1</option>
                                        <option value="Localitatea 2">Localitatea 2</option>
                                    </select>
                                </div>
                            </>
                        )}

                        <div className="form-group">
                            <label htmlFor="paymentMethod">Metodă de Plată</label>
                            <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                                <option value="cash">Numerar</option>
                                <option value="creditCard">Card</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="info">Alte informatii</label>
                            <textarea id="info" name="info" value={formData.info} onChange={handleChange} />
                        </div>

                        <div className="form-checkbox">
                            <input type="checkbox" id="newsLetter" name="newsLetter" checked={formData.newsLetter} onChange={handleChange} />
                            <label htmlFor="newsLetter">Doresc sa primesc oferte pe email si sms</label>
                        </div>

                        <div className="form-checkbox">
                            <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} />
                            <label htmlFor="acceptTerms">
                                Accept <a href='/termeni-conditii'>termenii si conditiile</a>
                            </label>
                        </div>

                        <button type="submit" className="btn-custom">Finalizeaza</button>
                    </form>
                </div>
            </div>

            <p className='info-custom'>Ce este marcat cu (*) indica faptul ca sunt campuri care trebuiesc completate obligatoriu</p>
        </div>
    );
};

export default Checkout;

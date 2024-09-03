import React, { useState } from 'react';
import { useCart } from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import './CheckOut.css';

const Checkout = () =>{
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        region: 'Constanta',
        info: '',
        paymentMethod: 'cash',
        deliveryMethod: 'delivery',
        acceptTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checked' ? checked : value,
        });
    };

    const handleCheckOut = async (e) =>{
        e.preventDefault();

        let message = '';
        if(!formData.name) message = 'Te rog sa introduci numele tau!';
        else if(!formData.email) message = 'Te rog sa introduci email-ul tau!';
        else if(!formData.phoneNumber) message = 'Te rog sa introduci numarul de telefon!';
        else if(formData.deliveryMethod === 'delivery' && (!formData.address || !formData.city || !formData.region)){
            message = 'Te rog completeaza datele de livrare';
        }
        else if(!formData.acceptTerms){
            message = 'Trebuie sa accepti termenii si conditiile!';
        }

        if(message){
            window.scrollTo(0, 0);
            setError(message);
            return;
        }

        const orderData = {
            customer_name: formData.name,
            phone_number: formData.phoneNumber,
            email: formData.email,
            delivery_methods: formData.deliveryMethod,
            address: formData.deliveryMethod === 'pickup' ? 'ridicare' : formData.address,
            city: formData.deliveryMethod === 'pickup' ? 'ridicare' : formData.city,
            region: formData.region,
            payment_methods: formData.paymentMethod,
            additional_info: formData.info,
            total_amount: subTotal,
            order_items: cartItems.map(item =>({
                product: item.product_id,
                quantity: item.quantity,
                selected_option: item.selectedOption || ''
            }))
        };
        try{
            const response = await fetch(`${apiUrl}/create-order/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(orderData)
            });

            const textResponse = await response.text();
            console.log('Server Response:', textResponse);
            const data = JSON.parse(textResponse);

            if(response.ok){
                clearCart();
                navigate("/");
            }
            else{
                setError(data.message || 'Eroare la plasarea comenzi');
            }
        }
        catch(error){
            console.error(error);
            setError('Eroare la plasarea comenzi');
        }
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if(parts.length === 2){
            return parts.pop().split(";").shift();
        }
        return '';
    };

    const calculateSubtotal = () =>{
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    const subTotal = calculateSubtotal();

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <h1>Finalizeaza comanda</h1>
            </div>
            <div className='border'>
                <ul className="list-group mb-4 custom-ul">
                    {cartItems.map((item, index) => (
                        <li key={index} className="list-group-item d-flex align-items-center h-25">
                            <img src={item.image_url} alt={item.name} className="me-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                            <div className="d-flex flex-column">
                                <p className="mb-2">{item.name}</p>
                                <p className="mb-2">{item.quantity} x {item.price} lei</p>
                                <p className="mb-2">{item.selectedOption}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className='subtotal-custom'>Subtotal: {subTotal} lei</p>
            </div>
            <div className='checkout-form-container'>
                <form className='checkout-form' onSubmit={handleCheckOut}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nume(*)</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-control" 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email(*)</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="form-control" 
                            value={formData.email} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Număr de Telefon(*)</label>
                        <input 
                            type="phoneNumber" 
                            id="phoneNumber" 
                            name="phoneNumber" 
                            className="form-control" 
                            value={formData.phoneNumber} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deliveryMethod" className="form-label">Modalitate de livrare</label>
                        <select 
                            id="deliveryMethod" 
                            name="deliveryMethod" 
                            className="form-select" 
                            value={formData.deliveryMethod} 
                            onChange={handleChange}
                        >
                            <option value="delivery">La domiciliu</option>
                            <option value="pickup">Ridicare personala</option>
                        </select>
                    </div>
                    {formData.deliveryMethod === 'delivery' &&(
                        <>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Adresă(*)</label>
                                <textarea 
                                    id="address" 
                                    name="address" 
                                    className="form-control" 
                                    value={formData.address} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Oras(*)</label>
                                    <input 
                                        type="text" 
                                        id="city" 
                                        name="city" 
                                        className="form-control" 
                                        value={formData.city} 
                                        onChange={handleChange} 
                                    />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="region" className="form-label">Judet(*)</label>
                                    <input 
                                        type="text" 
                                        id="region" 
                                        name="region" 
                                        className="form-control" 
                                        value={formData.region} 
                                        onChange={handleChange} 
                                    />
                            </div>
                        </>
                    )}
                    <div className="mb-3">
                        <label htmlFor="paymentMethod" className="form-label">Metodă de Plată</label>
                        <select 
                            id="paymentMethod" 
                            name="paymentMethod" 
                            className="form-select" 
                            value={formData.paymentMethod} 
                            onChange={handleChange}
                        >
                            <option value="cash">Numerar</option>
                            <option value="creditCard">Card</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="info" className="form-label">Alte informatii</label>
                        <textarea 
                            id="info"
                            name="info"
                            className="form-control"
                            value={formData.info}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="checkbox"
                            className="form-check-input"
                            id="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                        />
                        <label htmlFor="acceptTerms" className='form-check-label'>Accept <a href='/termeni-conditii'>termenii si conditiile</a></label>
                    </div>
                    <button type="submit" className="btn btn-custom">
                        Finalizeaza
                    </button>
                </form>
            </div>
            <p className='info-custom'>Ce este marcat cu (*) indica faptul ca sunt campuri care trebuiesc completate obligatoriu</p>
        </div>
    )

}

export default Checkout;
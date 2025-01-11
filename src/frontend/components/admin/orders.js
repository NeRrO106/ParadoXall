import React, { useEffect, useState } from "react";
import "./ordersadmin.css";

const OrdersAdmin = () =>{
    const [orders, setOrders] = useState([]);

    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(()=>{
        const url = `${apiUrl}/orders/`;
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                const implementedOrder = data.filter((order) => order.is_completed === 'no');
                setOrders(implementedOrder);
            })
            .catch(error => console.error('Error fetching products', error));
    }, [apiUrl])

    const markOrderAsCompleted = (orderId) => {
        const url = `${apiUrl}/orders/${orderId}/complete/`;
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ is_completed: 'yes' }),
        })
          .then((response) => response.json())
          .then((updatedOrder) => {
            setOrders((prevOrders) =>
              prevOrders.map((order) =>
                order.order_id === orderId ? { ...order, is_completed: 'yes' } : order
              )
            );
          })
          .catch((error) => console.error("Error updating order", error));
    };    
    return(
    <div className="admin-products-page-table">
        <div className="main-admin">
            <h1>Orders</h1>
        </div>
        <table className="admin_table">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Products</th>
                    <th>Total Amount</th>
                    <th>Full Address</th>
                    <th>Phone Number</th>
                    <th>Delivery Method</th>
                    <th>Payment Method</th>
                    <th>Complete</th>
                    <th>Delivered</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <tr key={order.order_id}>
                        <td>{order.order_id}</td>
                        <td>{order.customer_name}</td>
                        <td>
                            {order.items.map((item, index) => (
                                <div key={index}>
                                    {item.product_name} - ({item.selected_option}) - {item.quantity} pcs
                                </div>
                            ))}
                        </td>
                        <td>{order.total_amount} lei</td>
                        <td>{`${order.region}, ${order.city}, ${order.address}`}</td>
                        <td>{order.phone_number}</td>
                        <td>{order.delivery_method}</td>
                        <td>{order.payment_methods}</td>
                        <td>
                            <button  onClick={() => markOrderAsCompleted(order.order_id)} className="btn btn-custom">Complete order</button>
                        </td>
                        <td>
                            {order.is_completed}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}
export default OrdersAdmin;
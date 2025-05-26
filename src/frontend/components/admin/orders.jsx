import React, { useEffect, useState } from "react";
import "./ordersadmin.scss";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const url = `${apiUrl}orders/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const implementedOrder = data.filter((order) => order.is_completed === 'no');
        setOrders(implementedOrder);
      })
      .catch((error) => console.error("Error fetching orders", error));
  }, [apiUrl]);

  const markOrderAsCompleted = (orderId) => {
    const url = `${apiUrl}orders/${orderId}/complete/`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_completed: "yes" }),
    })
      .then((response) => response.json())
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.order_id !== orderId)
        );
      })
      .catch((error) => console.error("Error updating order", error));
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Comenzi Active</h1>
      </div>
      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nume Client</th>
              <th>Produse</th>
              <th>Total</th>
              <th>Adresă</th>
              <th>Telefon</th>
              <th>Livrare</th>
              <th>Plată</th>
              <th>Finalizare</th>
              <th>Status</th>
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
                      {item.product_name} - ({item.selected_option}) - {item.quantity} buc
                    </div>
                  ))}
                </td>
                <td>{order.total_amount} lei</td>
                <td>{`${order.region}, ${order.city}, ${order.address}`}</td>
                <td>{order.phone_number}</td>
                <td>{order.delivery_method}</td>
                <td>{order.payment_methods}</td>
                <td>
                  <button
                    onClick={() => markOrderAsCompleted(order.order_id)}
                    className="btn-complete"
                  >
                    Finalizează
                  </button>
                </td>
                <td>{order.is_completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersAdmin;

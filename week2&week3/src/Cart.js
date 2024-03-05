import React from 'react';
import './App.css';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
      <div className="products-container">
        {cartItems.map((product, index) => (
          <li key={index}>
            <div key={product.id} className="product">
            <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
          </li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default Cart;

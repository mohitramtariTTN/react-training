import React, { useState, useEffect } from 'react';
import './Product.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Product';
import Cart from './Cart';
import './App.css'


const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">Cart ({cartItems.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { FaShoppingCart } from 'react-icons/fa';
import Dishes from "./components/Dishes"

function App() {
  const [products,setProducts]= useState(Dishes);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }

    setCartCount(cartCount + 1);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.product.id !== product.id);
    setCart(updatedCart);
  };

  const incrementQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.product.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingCart /> Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
            }
          />
          <Route
            path="/"
            element={<ProductList products={products} addToCart={addToCart} cartCount={cartCount} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

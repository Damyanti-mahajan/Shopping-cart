
import { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productToRemove.id)
    );
  };
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Shopping Cart</h1>
<Cart cartItems={cart} removeFromCart={removeFromCart} />
        <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default App;

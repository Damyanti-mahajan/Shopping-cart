
import { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import ProductDetailList from './Components/ProductDetailList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productToRemove.id)
    );
  };

  const increaseQty = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setSelectedProduct(null)}>Shopping Cart</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className=" cursor-pointer relative flex items-center "
          >
            <span className="text-2xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {selectedProduct ? (
          <ProductDetailList
            product={selectedProduct}
            closeDetails={() => setSelectedProduct(null)}
            addToCart={addToCart}
          />
        ) : (
          <ProductList
            products={products}
            addToCart={addToCart}
            setSelectedProduct={setSelectedProduct}
          />
        )}
      </main>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b shadow">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className=" cursor-pointer text-xl">✕</button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            clearCart={clearCart}
          />
        </div>
         <div className="p-4 border-t">
  <button
    onClick={() => setIsCartOpen(false)}
    className=" cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
  >
    ← Continue Shopping
  </button>
</div>

      </div>

    </div>
  );
}

export default App;

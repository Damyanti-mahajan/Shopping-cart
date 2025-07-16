import React, { useState } from 'react';

const Cart = ({ cartItems = [], removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      {/* Cart Header */}
      <h2
        className="text-xl font-semibold text-gray-700 cursor-pointer"
        onClick={toggleCart}
      >
        Cart: <span className="text-blue-600">{cartItems.length}</span>
      </h2>

      {/* Conditionally show details */}
      {isOpen && (
        <div className="mt-2">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 border rounded bg-gray-50 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart?.(item)}
                    className="text-red-500 font-bold text-lg"
                    title="Remove item"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

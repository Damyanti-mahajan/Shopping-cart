import React from 'react';

const Cart = ({ cartItems, removeFromCart, increaseQty, decreaseQty, clearCart }) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.product.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4"
              >
                {/* Product Image and Info */}
                <div className="flex items-center gap-4 w-full sm:w-2/3">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-20 object-contain rounded border"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.product.title.slice(0, 40)}...
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      ${item.product.price} × {item.quantity} ={' '}
                      <span className="font-bold text-gray-800">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() => decreaseQty(item.product)}
                        className="cursor-pointer bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-lg"
                      >
                        −
                      </button>
                      <span className="px-2 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.product)}
                        className="cursor-pointer bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="text-right">
                  <button
                    onClick={() => removeFromCart(item.product)}
                    className="cursor-pointer text-red-600 hover:text-red-800 text-xl"
                    title="Remove"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total & Clear Button */}
          <div className="mt-6 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">
              Total: ${totalAmount.toFixed(2)}
            </div>
            <button
              onClick={clearCart}
              className=" cursor-pointer bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

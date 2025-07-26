import React from 'react';

const  ProductDetailList = ({ product, closeDetails, addToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl mx-4 p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeDetails}
          className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-3">{product.description}</p>
            <p className="text-xl font-bold text-green-700 mb-2">₹ {product.price}</p>
            {product.rating && (
              <p className="mb-4">
                <span className="text-yellow-500">★</span> {product.rating.rate} ({product.rating.count} ratings)
              </p>
            )}
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailList;

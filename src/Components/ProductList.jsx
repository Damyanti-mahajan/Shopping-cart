
import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  const [addedProductId, setAddedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 rounded-lg flex flex-col justify-between relative"
          >
            {/* ✅ Click to view detail */}
            <div onClick={() => openProductDetail(product)} className="cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <h2 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-4">{product.description}</p>
            </div>

            <div className="mt-auto flex justify-between items-center">
              <span className="text-blue-600 font-bold text-lg">${product.price}</span>
              <div className="relative">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                >
                  Add to Cart
                </button>

                {addedProductId === product.id && (
                  <div className="absolute top-full right-0 mt-1 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-bounce transition-opacity duration-200">
                    <span className="text-green-600">✔</span>
                    Added to Cart
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              onClick={closeProductDetail}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-48 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg text-blue-600 font-semibold mb-4">${selectedProduct.price}</p>
            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                closeProductDetail();
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;

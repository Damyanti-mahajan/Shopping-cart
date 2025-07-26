// import React from 'react';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between">
//       <img src={product.image} alt={product.title} className="h-32 object-contain mb-2" />
//       <h3 className="text-md font-semibold text-gray-800 text-center mb-1">
//         {product.title.slice(0, 40)}...
//       </h3>
//       <p className="text-green-700 font-bold mb-2">₹{product.price}</p>
//       <button
//   onClick={() => addToCart(product)}
//   className=" cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
// >
//   Add to Cart
// </button>

//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';

const ProductCard = ({ product, addToCart, onProductClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between">
      {/* Clickable image and title */}
      <div
        onClick={() => onProductClick(product)}
        className="cursor-pointer w-full text-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-32 object-contain mb-2 mx-auto"
        />
        <h3 className="text-md font-semibold text-gray-800 mb-1">
          {product.title.slice(0, 40)}...
        </h3>
      </div>

      <p className="text-green-700 font-bold mb-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

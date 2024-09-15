// components/ProductCard.tsx
import React from 'react';
import { FaShoppingCart, FaHeart, FaSearch, FaSyncAlt, FaStar } from 'react-icons/fa';
import Image from 'next/image';

type Product = {
  title: string;
  price: number;
  originalPrice?: number;
  imageUrlFront: string;
  imageUrlBack: string;
  rating: number;
  thumbImages: string[];
  colors: string[];
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-box product-wrap max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 my-3 mx-2 grid-cols-4">
      {/* Image Wrapper */}
      <div className="img-wrapper relative group">
        <div className="front">
          <img
            src={product.imageUrlFront}
            alt={product.title}
            className="w-full h-56 object-cover transition-all duration-500 group-hover:opacity-0"
          />
        </div>
        <div className="back absolute inset-0">
          <img
            src={product.imageUrlBack}
            alt={product.title}
            className="w-full h-56 object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Cart & Wishlist Icons (Moved to bottom-right) */}
        <div className="cart-info cart-wrap absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
            <FaShoppingCart />
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition">
            <FaHeart />
          </button>
          <button className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition">
            <FaSearch />
          </button>
          <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
            <FaSyncAlt />
          </button>
        </div>

        {/* Thumbnail List */}
        <ul className="product-thumb-list absolute bottom-0 left-0 p-2 flex space-x-2">
          {product.thumbImages.map((thumb, index) => (
            <li key={index} className="grid_thumb_img border border-gray-300 rounded">
              <Image
                src={thumb}
                alt="thumbnail"
                className="w-12 h-12 object-cover rounded"
                width={48}
                height={48}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Product Details */}
      <div className="product-detail p-4">
        {/* Rating */}
        <div className="rating mb-2 text-yellow-500 flex">
          {Array(product.rating)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        {/* Product Title */}
        <h6 className="text-lg font-bold text-gray-900">{product.title}</h6>

        {/* Product Price */}
        <h4 className="text-lg font-semibold text-gray-700">
          ${product.price.toFixed(2)}
          {product.originalPrice && (
            <del className="ml-2 text-sm text-gray-500">${product.originalPrice.toFixed(2)}</del>
          )}
        </h4>

        {/* Color Variants */}
        <ul className="color-variant flex space-x-2 mt-2">
          {product.colors.map((color, index) => (
            <li
              key={index}
              className={`w-5 h-5 rounded-full cursor-pointer`}
              style={{ backgroundColor: color }}
              title={color}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;

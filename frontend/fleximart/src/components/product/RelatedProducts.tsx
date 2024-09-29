import React from 'react';
import Image from 'next/image';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoIosRefresh } from 'react-icons/io';

const products = [
    {
        id: 1,
        name: 'trim dress',
        price: 145,
        imgFront: 'https://via.placeholder.com/300?text=productOne',
        imgBack: 'https://via.placeholder.com/300?text=productTwo',
        rating: 5,
    },
    {
        id: 2,
        name: 'belted dress',
        price: 185,
        imgFront: 'https://via.placeholder.com/300?text=productOne',
        imgBack: 'https://via.placeholder.com/300?text=productTwo',
        rating: 5,
    },
    {
        id: 3,
        name: 'fitted dress',
        price: 174,
        imgFront: 'https://via.placeholder.com/300?text=productOne',
        imgBack: 'https://via.placeholder.com/300?text=productTwo',
        rating: 5,
    },
    {
        id: 4,
        name: 'belted top',
        price: 98,
        imgFront: 'https://via.placeholder.com/300?text=productOne',
        imgBack: 'https://via.placeholder.com/300?text=productTwo',
        rating: 5,
    },
    {
        id: 5,
        name: 'waist dress',
        price: 230,
        imgFront: 'https://via.placeholder.com/300?text=productOne',
        imgBack: 'https://via.placeholder.com/300?text=productTwo',
        rating: 5,
    },
    {
        id: 6,
        name: 'crop top',
        price: 121,
        imgFront: 'https://via.placeholder.com/300?text=productOne',
        imgBack: 'https://via.placeholder.com/300?text=productTwo',
        rating: 5,
    },
];

const RelatedProducts = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold">Related Products</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="product-box">
                            <div className="img-wrapper relative">
                                <div className="front">
                                    <Image
                                        src={product.imgFront}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="back absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100">
                                    <Image
                                        src={product.imgBack}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="cart-info absolute top-0 left-0 w-full h-full flex justify-center items-center space-x-2 opacity-0 hover:opacity-100">
                                    <button className="p-2 rounded-full text-gray-100">
                                        <FaShoppingCart />
                                    </button>
                                    <a href="#" className="bg-white p-2 rounded-full">
                                        <FaHeart />
                                    </a>
                                    <a href="#" className="bg-white p-2 rounded-full">
                                        <FaSearch />
                                    </a>
                                    <a href="#" className="bg-white p-2 rounded-full">
                                        <IoIosRefresh />
                                    </a>
                                </div>
                            </div>
                            <div className="product-detail mt-4">
                                <div className="rating mb-2 text-yellow-500">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i key={i} className="fa fa-star"></i>
                                    ))}
                                </div>
                                <a>
                                    <h6 className="text-gray-400 font-thin">{product.name}</h6>
                                </a>
                                <h4 className="text-xl font-thin">${product.price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;

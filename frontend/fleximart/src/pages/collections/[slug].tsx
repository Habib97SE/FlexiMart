// pages/collection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import FilterBar from '@/components/product/FilterBar';
import PriceRangeFilter from '@/components/product/PriceRangeFilter';

const CollectionPage = () => {
    // State to handle toggling of dropdowns
    const [isCategoryOpen, setCategoryOpen] = useState(true);
    const [isBrandOpen, setBrandOpen] = useState(false);
    const [isColorsOpen, setColorsOpen] = useState(false);
    const [isSizeOpen, setSizeOpen] = useState(false);

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-white shadow-md p-6 rounded-md">
                        {/* Category Dropdown */}
                        <div className="mb-8">
                            <div
                                onClick={() => setCategoryOpen(!isCategoryOpen)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <h3 className="font-bold text-lg">Category</h3>
                                <span>{isCategoryOpen ? '-' : '+'}</span>
                            </div>
                            {isCategoryOpen && (
                                <ul className="space-y-2 mt-4">
                                    {['All Products', 'Fashion', 'Electronics', 'Furniture', 'Beauty', 'Jewellery'].map(
                                        (category, index) => (
                                            <li key={index} className="cursor-pointer hover:underline">
                                                {category}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>

                        {/* Brand Dropdown */}
                        <div className="mb-8">
                            <div
                                onClick={() => setBrandOpen(!isBrandOpen)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <h3 className="font-bold text-lg">Brand</h3>
                                <span>{isBrandOpen ? '-' : '+'}</span>
                            </div>
                            {isBrandOpen && (
                                <div className="mt-4">
                                    {['Nike', 'Zara', 'Denim', 'Max'].map((brand, index) => (
                                        <div key={index} className="form-check">
                                            <input type="checkbox" className="form-check-input" id={brand} />
                                            <label htmlFor={brand} className="ml-2">
                                                {brand}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Colors Dropdown */}
                        <div className="mb-8">
                            <div
                                onClick={() => setColorsOpen(!isColorsOpen)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <h3 className="font-bold text-lg">Colors</h3>
                                <span>{isColorsOpen ? '-' : '+'}</span>
                            </div>
                            {isColorsOpen && (
                                <ul className="flex space-x-2 mt-4">
                                    {['yellow', 'red', 'green', 'blue', 'black'].map((color, index) => (
                                        <li key={index} className={`w-6 h-6 rounded-full bg-${color}`}></li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Size Dropdown */}
                        <div className="mb-8">
                            <div
                                onClick={() => setSizeOpen(!isSizeOpen)}
                                className="flex justify-between items-center cursor-pointer"
                            >
                                <h3 className="font-bold text-lg">Size</h3>
                                <span>{isSizeOpen ? '-' : '+'}</span>
                            </div>
                            {isSizeOpen && (
                                <div className="mt-4">
                                    {['S', 'M', 'L', 'XL'].map((size, index) => (
                                        <div key={index} className="form-check">
                                            <input type="checkbox" className="form-check-input" id={size} />
                                            <label htmlFor={size} className="ml-2">
                                                {size}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* Price Range */}
                        <PriceRangeFilter />
                    </div>

                    {/* Main Content */}
                    <div className="col-span-3">
                        {/* Top Banner */}
                        <div className="mb-6">
                            <div className="relative">
                                <Image
                                    src="https://via.placeholder.com/1920x600"
                                    alt="Top Banner"
                                    width={1920}
                                    height={600}
                                    className="rounded-md"
                                />
                                <div className="absolute top-0 left-0 p-6">
                                    <h4 className="text-3xl font-bold text-white">Fashion</h4>
                                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        {/* Filters */}
                        <FilterBar />

                        {/* Product Grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="border rounded-md shadow-sm">
                                    <Image
                                        src={`https://via.placeholder.com/400x300?text=Product+Image+${i + 1}`}
                                        alt="Product"
                                        width={400}
                                        height={300}
                                        className="img-fluid"
                                    />
                                    <div className="mt-4 p-4">
                                        <div className="flex items-center space-x-1 text-yellow-500">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <span key={starIndex}>&#9733;</span>
                                            ))}
                                        </div>
                                        <h5 className="text-lg font-bold">Product Title</h5>
                                        <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text.</p>
                                        <div className="mt-2">
                                            <span className="text-xl font-bold">$99.99</span>
                                            <del className="text-sm text-gray-500 ml-2">$149.99</del>
                                        </div>
                                        <div className="flex space-x-2">
                                            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                                            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <div className="text-center mt-12">
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-md">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionPage;

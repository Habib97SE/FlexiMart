"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HEAD from 'next/head';
import FilterBar from '@/components/product/FilterBar';
import PriceRangeFilter from '@/components/product/PriceRangeFilter';
import CommonLayout from '@/components/CommonLayout';
import CollectionModel from '@/models/CollectionModel';

const CollectionPage = () => {

    const router = useRouter();

    const { slug }: string = router.query;

    // CollectionModel instance
    const collectionModel: CollectionModel = new CollectionModel();

    // collection data
    const [collectionData, setCollectionData] = useState({});

    // State to handle toggling of dropdowns
    const [isCategoryOpen, setCategoryOpen] = useState(true);
    const [isBrandOpen, setBrandOpen] = useState(false);
    const [isColorsOpen, setColorsOpen] = useState(false);
    const [isSizeOpen, setSizeOpen] = useState(false);


    // State for layout (grid or list)
    const [layout, setLayout] = useState('grid');

    // State for number of products per row (2, 4, 6)
    const [productsPerRow, setProductsPerRow] = useState(3);

    // State for sorting option (HighToLow, LowToHigh, A-Z, Z-A)
    const [sortOrder, setSortOrder] = useState('default');

    const products = [
        { title: 'Product 1', price: 99.99, originalPrice: 149.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+1' },
        { title: 'Product 2', price: 59.99, originalPrice: 129.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+2' },
        { title: 'Product 3', price: 109.99, originalPrice: 199.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+3' },
        { title: 'Product 4', price: 79.99, originalPrice: 149.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+4' },
        { title: 'Product 5', price: 89.99, originalPrice: 159.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+5' },
        { title: 'Product 6', price: 119.99, originalPrice: 169.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+6' },
        { title: 'Product 7', price: 49.99, originalPrice: 109.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+7' },
        { title: 'Product 8', price: 69.99, originalPrice: 119.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+8' },
        { title: 'Product 9', price: 149.99, originalPrice: 249.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+9' },
        { title: 'Product 10', price: 129.99, originalPrice: 199.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+10' },
        { title: 'Product 11', price: 69.99, originalPrice: 129.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+11' },
        { title: 'Product 12', price: 99.99, originalPrice: 159.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+12' },
        { title: 'Product 13', price: 79.99, originalPrice: 139.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+13' },
        { title: 'Product 14', price: 89.99, originalPrice: 149.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+14' },
        { title: 'Product 15', price: 119.99, originalPrice: 179.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+15' },
        { title: 'Product 16', price: 49.99, originalPrice: 99.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+16' },
        { title: 'Product 17', price: 69.99, originalPrice: 119.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+17' },
        { title: 'Product 18', price: 149.99, originalPrice: 229.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+18' },
        { title: 'Product 19', price: 129.99, originalPrice: 189.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+19' },
        { title: 'Product 20', price: 69.99, originalPrice: 139.99, imageUrl: 'https://via.placeholder.com/400x300?text=Product+20' },
    ];

    // Sort products based on sortOrder
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === 'HighToLow') {
            return b.price - a.price;
        } else if (sortOrder === 'LowToHigh') {
            return a.price - b.price;
        } else if (sortOrder === 'AZ') {
            return a.title.localeCompare(b.title);
        } else if (sortOrder === 'ZA') {
            return b.title.localeCompare(a.title);
        } else {
            return 0;
        }
    });

    useEffect(() => {
        if (slug) {
            console.log(slug);
            const fetchCollectionData = async () => {
                const data = await collectionModel.getCollectionBySlug(slug);
                const products = await collectionModel.getProductsByCollectionId(data.id);
                setCollectionData(data);
            }
            fetchCollectionData();
        }

    }, [slug]);

    return (
        <>
            <HEAD>
                <title>{collectionData.name}</title>
                <meta name="description" content="Collection page" />
            </HEAD>
            <CommonLayout data={{
                title: "Suits for men", paths: [
                    { name: "Home", href: "/" },
                    { name: "Collections", href: "/collections" },
                ]
            }}>
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
                                            <h4 className="text-3xl font-bold text-white">{collectionData.name}</h4>
                                            <p className="text-white">{collectionData.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Filters */}
                                <FilterBar
                                    layout={layout}
                                    setLayout={setLayout}
                                    productsPerRow={productsPerRow}
                                    setProductsPerRow={setProductsPerRow}
                                    sortOrder={sortOrder}
                                    setSortOrder={setSortOrder}
                                />

                                {/* Product Grid or List */}
                                <div className={layout === 'grid' ? `grid grid-cols-${productsPerRow} gap-6` : 'space-y-6'}>
                                    {sortedProducts.map((product, i) => (
                                        <div
                                            key={i}
                                            className={`border rounded-md shadow-sm ${layout === 'list' ? 'flex items-center p-4' : ''}`}
                                        >
                                            <Image
                                                src={product.imageUrl}
                                                alt="Product"
                                                width={layout === 'grid' ? 400 : 150}
                                                height={layout === 'grid' ? 300 : 150}
                                                className={`img-fluid ${layout === 'list' ? 'mr-4' : ''}`}
                                            />
                                            <div className={`${layout === 'list' ? 'flex-1' : 'mt-4 p-4'}`}>
                                                <div className="flex items-center space-x-1 text-yellow-500">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <span key={starIndex}>&#9733;</span>
                                                    ))}
                                                </div>
                                                <h5 className="text-lg font-bold">{product.title}</h5>
                                                <p className="text-sm text-gray-600">Lorem Ipsum is simply dummy text.</p>
                                                <div className="mt-2">
                                                    <span className="text-xl font-bold">${product.price}</span>
                                                    <del className="text-sm text-gray-500 ml-2">${product.originalPrice}</del>
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
            </CommonLayout>
        </>
    );
};

export default CollectionPage;

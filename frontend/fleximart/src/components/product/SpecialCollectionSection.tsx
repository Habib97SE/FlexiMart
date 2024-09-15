import React, { useState } from "react";
import ProductCard from "./ProductCard";  // Assuming this is your existing ProductCard component

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

type ProductSectionProps = {
    newProducts: Product[];
    featuredProducts: Product[];
    specialProducts: Product[];
};

/**
 * This section is used in index.tsx to display the new, featured, and/or special products, the collection can be changed by clicking on the tabs
 * @returns 
 */
const ProductSection: React.FC<ProductSectionProps> = ({
    newProducts,
    featuredProducts,
    specialProducts,
}) => {
    const [activeTab, setActiveTab] = useState("NEW ARRIVAL");

    const renderProducts = (products: Product[], title: string, description: string) => {
        return (
            <>
                {title && <h2 className="text-2xl font-bold border-b border-black inline-block">{title}</h2>}
                {description && <p className="text-center">{description}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </>
        );
    };

    return (
        <section className="section-b-space p-t-0 ratio_asos">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="title1 section-t-space text-center">
                    <h4 className="text-gray-500 text-lg">Exclusive Products</h4>
                    <h2 className="title-inner1 text-3xl font-bold">Special Products</h2>
                    <div className="line bg-gray-300 h-0.5 w-24 mx-auto mt-4"></div>
                </div>

                {/* Tabs for Product Categories */}
                <div className="theme-tab mt-8">
                    <ul className="tabs tab-title flex justify-center space-x-4">
                        <li
                            className={`cursor-pointer ${activeTab === "NEW ARRIVAL" ? "active text-blue-600" : ""}`}
                            onClick={() => setActiveTab("NEW ARRIVAL")}
                        >
                            NEW ARRIVAL
                        </li>
                        <li
                            className={`cursor-pointer ${activeTab === "FEATURED" ? "active text-blue-600" : ""}`}
                            onClick={() => setActiveTab("FEATURED")}
                        >
                            FEATURED
                        </li>
                        <li
                            className={`cursor-pointer ${activeTab === "SPECIAL" ? "active text-blue-600" : ""}`}
                            onClick={() => setActiveTab("SPECIAL")}
                        >
                            SPECIAL
                        </li>
                    </ul>

                    {/* Product Grids */}
                    <div className="mt-8">
                        {activeTab === "NEW ARRIVAL" && renderProducts(newProducts, "New Arrival", "Check out our latest products")}
                        {activeTab === "FEATURED" && renderProducts(featuredProducts, "Featured Products", "Check out our featured products")}
                        {activeTab === "SPECIAL" && renderProducts(specialProducts, "Special Products", "Check out our special products")}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;

"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import ProductModel from "@/models/ProductModel";
import CommonLayout from "@/components/CommonLayout";
import { ProductResponse } from "@/interface/ProductInterface";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Slider from "react-slick";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import TabbedSection from "@/components/product/TabbedSection";
import RelatedProducts from "@/components/product/RelatedProducts";
import HEAD from "next/head";
import { set } from "react-hook-form";

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState('description');
    const { cart, addItemToCart } = useCart();
    const router = useRouter();
    const { slug } = router.query;
    const [productData, setProductData] = useState(null as ProductResponse | null);
    const [errorFindingProduct, setErrorFindingProduct] = useState(false);
    const productModel: ProductModel = new ProductModel();
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const data = {
        title: "Product Page",
        paths: [
            { name: "Home", href: "/" },
            { name: "Demo", href: `/products/${productData != undefined ? productData.slug : ""}` },
        ],
    };


    /**
     * Add a product variant to the cart
     * @param variantId number : id of the variant to add to cart
     */
    const addToCart = () => {
        if (selectedVariant == 0) {
            return null;
        }
        const productVariant = {
            name: productData?.name,
            brand: productData?.brand.name,
            variant: productData?.productVariants.find(variant => variant.id == selectedVariant),
            totalPrice: productData?.productVariants.find(variant => variant.id == selectedVariant)?.inventory.discountPrice * quantity,
            quantity: quantity,
        }
        if (productVariant) {
            console.log(productVariant);
            addItemToCart(productVariant);
            setQuantity(1);
            setSelectedVariant(0);
        } else {
            return null;
        }

    };



    /**
     * Calculate the percentage of discount applied to the product
     * @param price nunmber : original price of the product
     * @param discountPrice number : discounted price of the product
     * @returns : number : percentage of discount applied in Integer (whool number) form.
     */
    const calculateDiscountPercentage = (price: number, discountPrice: number) => {
        return Math.floor(((price - discountPrice) / price) * 100);
    }


    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                const response = await productModel.getProductBySlug(slug as string);
                if (response == null) {
                    setErrorFindingProduct(true);
                    return;
                }
                setProductData(response);
            }
            fetchData();

        }

    }, [slug]);



    const productImages = [
        { id: 1, src: "https://via.placeholder.com/1000?text=productOne", alt: "yellow" },
        { id: 2, src: "https://via.placeholder.com/1000?text=productTwo", alt: "white" },
        { id: 3, src: "https://via.placeholder.com/1000?text=productThree", alt: "pink" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <button>Next</button>,
        prevArrow: <button>Previous</button>,
    };

    if (errorFindingProduct) {
        return (
            <div
                className="container-fluiid"
            >
                <div className="row">
                    <div className="flex flex-col items-center justify-center">
                        <h1>Product Not Found</h1>
                    </div>
                </div>
            </div>
        )
    }


    return (

        <>
            <HEAD>
                <title>{productData?.name}</title>
                <meta name="description" content={productData?.description} />
                <meta property="og:title" content={productData?.name} />
                <meta property="og:description" content={productData?.description} />
                <meta property="og:image" content={productImages[0].src} />
                <meta property="og:url" content={`https://www.example.com/products/${productData?.slug}`} />
                <meta property="og:type" content="product" />
                <meta property="og:site_name" content="Example" />
                <meta property="og:locale" content="en_US" />
            </HEAD>
            <CommonLayout data={data}>
                <section className="py-8 my-2">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Product Images */}
                            <div>
                                <Slider {...settings}>
                                    {productImages.map(image => (
                                        <div key={image.id} className="w-full">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={500}
                                                height={500}
                                                className="rounded-md"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                                <div className="mt-4 flex space-x-4">
                                    {productImages.map(image => (
                                        <div key={image.id} className="w-20 h-20">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={80}
                                                height={80}
                                                className="rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{productData?.name}</h2>
                                <h4 className="text-xl">
                                    <del className="text-gray-500">{productData?.productVariants[0].inventory.price} {productData?.productVariants[0].inventory.currency}</del>
                                    <span className="text-red-500 ml-2">{calculateDiscountPercentage(productData?.productVariants[0].inventory.price, productData?.productVariants[0].inventory.discountPrice)} % off</span>
                                </h4>
                                <h3 className="text-2xl font-semibold mb-4">{productData?.productVariants[0].inventory.discountPrice} {productData?.productVariants[0].inventory.currency}</h3>

                                {/* Color Variant */}
                                <ul className="flex space-x-2 mb-4">
                                    <li className="w-8 h-8 bg-yellow-400 rounded-full"></li>
                                    <li className="w-8 h-8 bg-white border rounded-full"></li>
                                    <li className="w-8 h-8 bg-pink-400 rounded-full"></li>
                                </ul>
                                {/* Size Selection */}
                                <div className="border-t border-dashed my-4 ">
                                    <h6 className="font-semibold">Select Size</h6>
                                    <div className="flex space-x-2">
                                        {productData?.productVariants.map(variant => (
                                            <button
                                                onClick={() => {
                                                    setSelectedVariant(parseInt(variant.id));
                                                }}
                                                key={variant.id} className={`px-3 py-2 rounded-md ${selectedVariant === variant.id ? "border border-red-600" : "border"}`}>{variant.variantOptions[0].value}</button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className="mb-4">
                                    <h6 className="font-semibold">Quantity</h6>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => setQuantity(quantity - 1)}
                                            className="px-3 py-2 bg-gray-200">-</button>
                                        <input
                                            type="text"
                                            initialValue={quantity}
                                            value={quantity}
                                            className="border text-center w-12"
                                            readOnly
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="px-3 py-2 bg-gray-200">+</button>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-4 mt-4">
                                    <button
                                        className="bg-blue-500 text-white px-6 py-2 rounded-md"
                                        onClick={() => addToCart()}
                                    >Add to Cart</button>
                                    <button className="bg-green-500 text-white px-6 py-2 rounded-md">Buy Now</button>
                                </div>

                                {/* Product Details */}
                                <div className="border-t border-dashed mt-6 pt-4">
                                    <h6 className="font-bold">Product Details</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                                {/* Share Links */}
                                <div className="border-t border-dashed mt-6 pt-4">
                                    <h6 className="font-bold">Share It</h6>
                                    <div className="flex space-x-4 cursor-pointer">
                                        <FaInstagram size={24} className="hover:text-pink-400" />
                                        <FaFacebook size={24} className="hover:text-blue-600" />
                                        <FaTwitter size={24} className="hover:text-blue-400" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <TabbedSection />
                <RelatedProducts />
            </CommonLayout >
        </>
    )

}

export default ProductPage;


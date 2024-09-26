"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import ProductModel from "@/models/ProductModel";
import CommonLayout from "@/components/CommonLayout";
import { ProductResponse } from "@/interface/ProductInterface";
import { CartProvider } from "@/context/CartContext";

const ProductPage = () => {
    const { cart, addItemToCart } = useContext(CartProvider);
    const router = useRouter();
    const { slug } = router.query;
    const [productData, setProductData] = useState(null as ProductResponse | null);
    const [errorFindingProduct, setErrorFindingProduct] = useState(false);
    const productModel: ProductModel = new ProductModel();

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
    const addToCart = (variantId: number) => {
        addItemToCart(variantId);
    };


    useEffect(() => {
        console.log(slug);
        if (slug) {
            const fetchData = async () => {
                const response = await productModel.getProductBySlug(slug as string);
                if (response == null) {
                    setErrorFindingProduct(true);
                    return;
                }
                setProductData(response);
                console.log(response);
            }
            fetchData();

        }

    }, [slug]);

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
            <CommonLayout data={data}>
                <div className="my-2">
                    <h1>Product Page</h1>
                    <div >
                        {productData && (
                            <div>
                                <h2>{productData.name} from {productData.brand.name}</h2>
                                <p>{productData.description}</p>
                                <div className="flex flex-row justify-around items-center">
                                    {productData.productVariants.map((variant) => (
                                        <div key={variant.id} className="bg-gray-100 py-3 px-5 rounded font-serif">
                                            <h3>sku: {variant.sku}</h3>
                                            <p>price: {variant.inventory.price}</p>
                                            <p>Discounted price: {variant.inventory.discountPrice}</p>
                                            <p>Cost Price: {variant.inventory.costPrice}</p>
                                            <p>Currency: {variant.inventory.currency}</p>
                                            <p>{variant.inventory.minOrderQuantity}</p>
                                            <p>{variant.inventory.maxOrderQuantity}</p>
                                            <p>{variant.inventory.inventoryTracking}</p>
                                            <p>{variant.inventory.reOrderLevel}</p>
                                            <p>{variant.inventory.stockQuantity}</p>
                                            <p>{variant.barCode}</p>
                                            {variant.productMedia.map((media) => (
                                                <div key={media.id}>
                                                    <img src={media.mediaUrl} alt={media.mediaAlt} />
                                                </div>
                                            ))}
                                            {variant.variantOptions.map((option) => (
                                                <div key={option.id}>
                                                    <p>{option.value}</p>
                                                </div>
                                            ))}
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => addToCart(variant.id)}
                                            >Add to Cart</button>

                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </CommonLayout >
        </>
    )

}

export default ProductPage;

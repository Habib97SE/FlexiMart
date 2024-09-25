"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import ProductModel from "@/models/ProductModel";

const ProductPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [productData, setProductData] = useState(null);
    const productModel: ProductModel = new ProductModel();

    useEffect(() => {
        console.log(slug);
        if (slug) {
            const fetchData = async () => {
                const response = await productModel.getProductBySlug(slug as string);
                setProductData(response);
                console.log(response);
            }
            fetchData();

        }

    }, [slug]);

    return (
        <div>
            <h1>Product Page</h1>
            {productData && (
                <div>
                    <h2>{productData.name}</h2>
                    <p>{productData.description}</p>
                    <p>Price: {productData.price}</p>
                    <p>Stock: {productData.stock}</p>
                </div>
            )}
        </div>
    )

}

export default ProductPage;
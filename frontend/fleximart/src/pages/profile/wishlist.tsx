"use client";
import React, { useEffect, useState } from "react";
import CommonLayout from "@/components/CommonLayout";
import Sidebar from "@/components/profile/Sidebar";
import { HeaderData } from "@/interface/HeaderData";
import Link from "next/link";
import HEAD from "next/head";
import Image from "next/image";

interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

function WishlistPage() {

    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

    const handleClickRemoveItem: (id: number) => void = (id) => {
        console.log("Remove item with id: ", id);
        setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    }

    const data: HeaderData = {
        title: "Wishlist",
        paths: [
            { name: "Home", href: "/" },
            { name: "Profile", href: "/profile" },
            { name: "Wishlist", href: "/profile/wishlist" },
        ],
    }

    useEffect(() => {
        setWishlistItems([
            {
                id: 1,
                name: "Product 1",
                price: 100,
                image: "https://via.placeholder.com/150",
            },
            {
                id: 1,
                name: "Product 2",
                price: 100,
                image: "https://via.placeholder.com/150",
            },
            {
                id: 1,
                name: "Product 3",
                price: 100,
                image: "https://via.placeholder.com/150",
            },
            {
                id: 1,
                name: "Product 4",
                price: 100,
                image: "https://via.placeholder.com/150",
            }
        ]);
    }, []);

    return (
        <>
            <CommonLayout data={data}>
                <HEAD>
                    <title>Wishlist</title>
                </HEAD>
                <section className="section-b-space py-12">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <Sidebar />
                            {/* Wishlist content */}
                            <div className="col-span-3">
                                <div className="p-6 border rounded-lg shadow-md bg-white mb-2">
                                    <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
                                    <p>
                                        You have {wishlistItems.length} items in your wishlist list.
                                    </p>
                                    <table className="w-full table-auto  text-center border-b border-black my-3">
                                        <thead className="border-b border-black my-2">
                                            <tr className="uppercase">
                                                <th>image</th>
                                                <th>product name</th>
                                                <th>price</th>
                                                <th>availability</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistItems.map((item) => (
                                                <tr className="even:bg-gray-100 hover:bg-gray-200" key={item.id}  >
                                                    <td>
                                                        <Image src={item.image} alt={item.name} width={150} height={150} />
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>${item.price}</td>
                                                    <td>In stock</td>
                                                    <td>
                                                        <button className="bg-gray-400 text-white py-3 px-4 rounded hover:bg-gray-600 mr-1">
                                                            <Link href={`/products/${item.id}`}>
                                                                View item
                                                            </Link>
                                                        </button>
                                                        <button
                                                            className="bg-red-500 text-white py-3 px-4 rounded hover:bg-red-600"
                                                            onClick={() => handleClickRemoveItem(item.id)}
                                                        >
                                                            Remove item
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div
                                        className="flex flex-row justify-end items-center py-4"
                                    >
                                        <Link href="/shop" className="bg-gray-500 text-white py-3 px-4 rounded hover:bg-gray-600 mr-1">
                                            Continue Shopping
                                        </Link>
                                        <Link href="/checkout" className="bg-gray-500 text-white py-3 px-4 rounded hover:bg-gray-600">
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </CommonLayout>
        </>
    );

}

export default WishlistPage;
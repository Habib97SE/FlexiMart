"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { FaHeart, FaUser } from "react-icons/fa";
import { UserContext } from "@/context/UserContext";

export default function TopBar() {
    const { userLoggedIn } = useContext(UserContext);

    const navItems = [
        {
            name: "Dashboard",
            href: "/profile/dashboard",
        },
        {
            name: "Address Book",
            href: "/profile/address-book"
        },
        {
            name: "Orders",
            href: "/profile/orders",
        },
        {
            name: "Wishlist",
            href: "/profile/wishlist",
        },
        {
            name: "Settings",
            href: "/profile/settings",
        }
    ];

    const MyAccountDropdown = () => {
        return (
            <ul className="absolute right-0 hidden group-hover:block bg-white text-black shadow-lg py-2  z-10">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="py-2 px-4 hover:bg-gray-500 hover:text-white font-bold whitespace-nowrap"
                    >
                        <Link href={item.href}>{item.name}</Link>
                    </li>

                ))}
                <li className="py-2 px-4 text-red-500 hover:bg-gray-500 hover:text-white font-bold whitespace-nowrap">
                    <Link href="/logout">Logout</Link>
                </li>
            </ul>
        );
    };

    return (
        <div className="py-2 bg-customTopBar text-topBarText font-medium">
            <div className="container mx-auto flex justify-between">
                <div className="flex space-x-4">
                    <span>Call Us: +46 40 123 456</span>
                </div>
                <div className="flex space-x-4">
                    <span>Welcome to FlexiMart</span>
                </div>
                <div className="flex space-x-4 items-center">
                    <Link href="/profile/wishlist">
                        <span className="flex items-center">
                            <FaHeart className="mr-1" /> Wishlist
                        </span>
                    </Link>
                    <div className="relative group">
                        <span className="cursor-pointer flex items-center">
                            <FaUser className="mr-1" /> My Account
                        </span>
                        {/* Render dropdown only if the user is logged in */}
                        {userLoggedIn && <MyAccountDropdown />}
                        {!userLoggedIn && (
                            <Link href="/login">
                                <span className="ml-2">Login</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

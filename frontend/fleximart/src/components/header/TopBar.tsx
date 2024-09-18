"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FaHeart, FaUser } from "react-icons/fa";
import { UserContext } from "@/context/UserContext";

export default function TopBar() {

    const { userLoggedIn } = useContext(UserContext);

    const MyAccount = () => {

        const navItems = [
            {
                name: "Profile",
                href: "/profile",
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
            },
            {
                name: "Logout",
                href: "/logout",
            }
        ]

        const NavLinks = navItems.map((item, index) => {
            return (
                <li key={index} className="py-4 px-3 hover:bg-gray-500 hover:text-white font-bold">
                    <Link href={item.href}>
                        {item.name}
                    </Link>
                </li>
            );
        });

        if (userLoggedIn) {
            return (
                <div className="relative group z-10">
                    <ul className="absolute right-0 hidden group-hover:block  bg-white text-black shadow-lg py-2 ">
                        {NavLinks}
                    </ul>
                </div>
            );
        }
        return (
            <Link href="/login">
                <span>
                    <FaUser /> My Account
                </span>
            </Link>
        );
    }

    return (
        <div className="py-2 bg-customTopBar text-topBarText font-medium min-h-2">
            <div className="container mx-auto flex justify-between">
                <div className="flex space-x-4">
                    <span>
                        Call Us: +46 40 123 456
                    </span>
                </div>
                <div className={"flex space-x-4"}>
                    <span>Welcome to FlexiMart</span>
                </div>
                <div className="flex space-x-4">
                    <Link href="/profile/wishlist" className={"d-flex flex-row"}>
                        <span className="flex items-start justify-center">
                            <FaHeart /> Wishlist
                        </span>
                    </Link>
                    <div className="relative group">
                        <span className="cursor-pointer flex items-start">
                            <FaUser /> My Account
                        </span>
                        <ul className="absolute right-0 hidden  group-hover:block bg-white text-black shadow-lg ">
                            <MyAccount />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
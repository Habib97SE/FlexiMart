import Link from 'next/link';
import TopBar from "@/components/header/TopBar";
import {FaShoppingCart} from "react-icons/fa";

export default function Header({title, path}) {
    return (
        <header className="sticky top-0 bg-white z-50 shadow-md">
            <div className="mobile-fix-option"></div>

            {/* Top Header */}
            <TopBar/>

            {/* Main Navigation */}
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/">
                            Logo
                        </Link>
                    </div>

                    {/* Main Menu */}
                    <div className="flex space-x-4">
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/shop">
                                Shop
                            </Link>
                            <Link href="/products">
                                Products
                            </Link>
                            <Link href="/features">
                                Features
                            </Link>
                            <Link href="/Users/habibio/Developments/FlexiMart/frontend/fleximart/pages">
                                Pages
                            </Link>
                            <Link href="/blogs">
                                Blogs
                            </Link>
                        </nav>
                        {/* Search, Cart, and Settings Icons */}
                        <div className="flex space-x-4">
                            <div className="relative">
                                Search
                            </div>
                            <div className="relative">
                                Settings
                            </div>
                            <div className="relative">
                                <Link href="/page/account/cart">
                                    <FaShoppingCart className="h-6 cursor-pointer"/>
                                    <span
                                        className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex justify-center items-center">
                      0
                    </span>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"container-fluid"}>
                    {/* Loop through path and print as PAth1 / PATH2 / PATH3 ... */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {path.map((path, index) => {
                                return (
                                    <span className={"text-xl"} key={index}>
                                        <Link href={path.href}>
                                            {path.name} / {" "}
                                        </Link>
                                    </span>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </header>
    );
}

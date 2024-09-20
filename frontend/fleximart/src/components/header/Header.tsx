import Image from 'next/image';
import Link from 'next/link';
import TopBar from "@/components/header/TopBar";
import { FaShoppingCart } from "react-icons/fa";
import BreadcrumbSection from '../beadcrumbsection/BreadcrumbSection';

export default function Header({ title, paths }) {
    return (
        <header className="sticky top-0 bg-white z-50 shadow-md">
            <div className="mobile-fix-option"></div>

            {/* Top Header */}
            <TopBar />

            {/* Main Navigation */}
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="logo">
                        <Image
                            src="https://via.placeholder.com/150x50?text=Logo"
                            alt="Logo"
                            width={150}
                            height={50}
                        />
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
                                    <FaShoppingCart className="h-6 cursor-pointer" />
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
            <BreadcrumbSection title={title} paths={paths} />
        </header>
    );
}

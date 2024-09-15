import Link from "next/link";
import { FaHeart, FaUser } from "react-icons/fa";

export default function TopBar() {
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
                        <ul className="absolute right-0 hidden group-hover:block bg-white text-black shadow-lg py-2">
                            <li>
                                <Link href="/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/register">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <a className="block px-4 py-2 hover:bg-gray-200">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
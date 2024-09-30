import Link from "next/link";
const Sidebar = () => {
    return (
        < div className="col-span-1" >
            <div className="dashboard-left p-6 bg-white shadow-md rounded-lg">
                <div className="block-content">
                    <ul className="space-y-4">
                        <li className="active">
                            <Link
                                href="/profile/dashboard"
                                className="text-blue-600 font-bold transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                Account Info
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/address-book"
                                className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                Address Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/orders"
                                className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                My Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/wishlist"
                                className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                My Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/newsletter"
                                className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                Newsletter
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/account"
                                className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/change-password"
                                className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                            >
                                Change Password
                            </Link>
                        </li>
                        <li className="last">
                            <Link
                                href="/logout"
                                className="text-red-600 transition-transform transform hover:translate-x-2 hover:text-red-800 relative group"
                            >
                                Log Out

                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
"use client";
import CommonLayout from "@/components/CommonLayout";
import Link from "next/link";
import HEAD from "next/head";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";

const DashboardPage = () => {
    const router = useRouter();

    const { user, userLoggedIn } = useUser();

    const data = {
        title: "My Account",
        path: [
            { name: "Home", href: "/" },
            { name: "My Account", href: "/dashboard" },
        ]
    }

    if (!userLoggedIn) {
        router.push("/login");
    }

    return (
        <>
            <CommonLayout data={data}>
                <HEAD>
                    <title>My Account</title>
                    <meta name="description" content="My Account" />
                </HEAD>
                <section className="section-b-space py-12">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Sidebar Navigation */}
                            <div className="col-span-1">
                                <div className="dashboard-left p-6 bg-white shadow-md rounded-lg">
                                    <div className="block-content">
                                        <ul className="space-y-4">
                                            <li className="active">
                                                <Link
                                                    href="#"
                                                    className="text-blue-600 font-bold transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    Account Info
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    Address Book
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    My Orders
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    My Wishlist
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    Newsletter
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    My Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="text-gray-600 transition-transform transform hover:translate-x-2 hover:text-blue-800 relative group"
                                                >
                                                    Change Password
                                                </Link>
                                            </li>
                                            <li className="last">
                                                <Link
                                                    href="#"
                                                    className="text-red-600 transition-transform transform hover:translate-x-2 hover:text-red-800 relative group"
                                                >
                                                    Log Out

                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="col-span-3">
                                <div className="dashboard-right p-6 bg-white shadow-md rounded-lg">
                                    <div className="dashboard">
                                        {/* Page Title */}
                                        <div className="page-title mb-4">
                                            <h2 className="text-2xl font-bold">My Dashboard</h2>
                                        </div>

                                        {/* Welcome Message */}
                                        <div className="welcome-msg mb-6">
                                            <p className="text-gray-700">Hello, MARK JECNO!</p>
                                            <p className="text-gray-500">
                                                From your My Account Dashboard you can view your recent account activity and update your account information. Select a link below to view or edit your information.
                                            </p>
                                        </div>

                                        {/* Account Information */}
                                        <div className="box-account box-info">
                                            <div className="box-head mb-4">
                                                <h2 className="text-xl font-semibold">Account Information</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* Contact Information */}
                                                <div className="box p-4 bg-gray-100 rounded-lg">
                                                    <div className="box-title flex justify-between mb-2">
                                                        <h3 className="text-lg font-semibold">Contact Information</h3>
                                                        <Link href="#" className="text-blue-600">
                                                            Edit
                                                        </Link>
                                                    </div>
                                                    <div className="box-content">
                                                        <h6 className="text-gray-700">MARK JECNO</h6>
                                                        <h6 className="text-gray-500">mark-jecno@gmail.com</h6>
                                                        <Link href="#" className="text-blue-600">
                                                            Change Password
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Newsletter */}
                                                <div className="box p-4 bg-gray-100 rounded-lg">
                                                    <div className="box-title flex justify-between mb-2">
                                                        <h3 className="text-lg font-semibold">Newsletters</h3>
                                                        <Link href="#" className="text-blue-600">
                                                            Edit
                                                        </Link>
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="text-gray-500">You are currently not subscribed to any newsletter.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Address Book */}
                                            <div className="box mt-6 p-4 bg-gray-100 rounded-lg">
                                                <div className="box-title flex justify-between mb-4">
                                                    <h3 className="text-lg font-semibold">Address Book</h3>
                                                    <Link href="#" className="text-blue-600">
                                                        Manage Addresses
                                                    </Link>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {/* Billing Address */}
                                                    <div>
                                                        <h6 className="font-semibold">Default Billing Address</h6>
                                                        <address className="text-gray-500">
                                                            You have not set a default billing address.<br />
                                                            <Link href="#" className="text-blue-600">
                                                                Edit Address
                                                            </Link>
                                                        </address>
                                                    </div>

                                                    {/* Shipping Address */}
                                                    <div>
                                                        <h6 className="font-semibold">Default Shipping Address</h6>
                                                        <address className="text-gray-500">
                                                            You have not set a default shipping address.<br />
                                                            <Link href="#" className="text-blue-600">
                                                                Edit Address
                                                            </Link>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </CommonLayout>
        </>

    );
};

export default DashboardPage;

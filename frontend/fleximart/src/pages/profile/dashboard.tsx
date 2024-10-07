"use client";
import { useState } from "react";
import CommonLayout from "@/components/CommonLayout";
import Link from "next/link";
import HEAD from "next/head";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "@/components/profile/Sidebar";

const DashboardPage = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState(null);
    const { user, userLoggedIn } = useUser();

    const data = {
        title: "My Account",
        paths: [
            { name: "Home", href: "/" },
            { name: "My Account", href: "/dashboard" },
        ]
    }

    useEffect(() => {
        if (user) {
            console.log("USerDetails in useEffect");
            console.log(user.data);
            setUserDetails(user.data);
        }
        if (!userLoggedIn) {
            router.push("/login");
        }
    }, [userLoggedIn]);


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
                            <Sidebar />

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
                                            <p className="text-gray-700">Hello, <span className="capitalize"> {userDetails?.firstName + " " + userDetails?.lastName}</span></p>
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
                                                        <h6 className="text-gray-700 capitalize">{userDetails?.firstName + " " + userDetails?.lastName}</h6>
                                                        <h6 className="text-gray-500">{userDetails?.email}</h6>
                                                        <h6 className="text-gray-500">{userDetails?.phoneNumber}</h6>
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

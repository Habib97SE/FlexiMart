"use client";
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useUser } from "@/context/UserContext"
import CommonLayout from "@/components/CommonLayout";
import Sidebar from "@/components/profile/Sidebar";
import HEAD from "next/head";


const AddressBookPage = () => {

    const data = {
        title: "Address Book",
        paths: [
            { title: "Home", href: "/" },
            { title: "Profile", href: "/profile" },
            { title: "Address Book", href: "/profile/address" }
        ]
    }

    return (

        <>
            <CommonLayout data={data}>
                <HEAD>
                    <title>Address Book</title>
                    <meta name="description" content="Address Book" />
                </HEAD>
                <section className="section-b-space py-12">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <Sidebar />
                            {/* Dashboard Content */}
                            <div className="col-span-3">
                                <div className="dashboard-right p-6 bg-white shadow-md rounded-lg">
                                    Hello, world!
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </CommonLayout>
        </>
    );
}

export default AddressBookPage;
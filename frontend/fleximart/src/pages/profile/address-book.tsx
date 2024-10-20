"use client";
import React, { useEffect, useState } from "react";
import CommonLayout from "@/components/CommonLayout";
import Sidebar from "@/components/profile/Sidebar";
import HEAD from "next/head";
import { FaEdit, FaHome, FaTrash } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import { FaDeleteLeft } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { useUser } from "@/context/UserContext";
import { AddressResponse } from "@/interface/AddressResponse";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    houseNumber: yup.string().required("House Number is required"),
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    postalCode: yup.string().required("Postal Code is required"),
    state: yup.string(),
    country: yup.string().required("Country is required"),
    phone: yup.string(),
    addressType: yup.string().required("Address Type is required"),
});

type FormData = yup.InferType<typeof schema>;

const AddressBookPage = () => {

    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    const { user, loading, createAddress, deleteAddress } = useUser();

    const [addresses, setAddresses] = useState<AddressResponse[]>([]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const data = {
        title: "Address Book",
        paths: [
            { name: "Home", href: "/" },
            { name: "Profile", href: "/profile" },
            { name: "Address Book", href: "/profile/address" },
        ],
    };

    const handleDeleteAddress = async (id) => {
        console.log("Delete address with id: ", id);
        const response = await deleteAddress(id);
        if (response.error) {
            console.log("Error deleting address");
        } else {
            console.log("Address deleted successfully");
            addresses.filter((address) => address.id !== id);
        }
    }

    const extractStreetNumber = (street: string) => {
        const streetParts = street.split(" ");
        return streetParts[streetParts.length - 1];;
    }

    const onSubmit = async (data: FormData) => {
        const address: AddressRequest = {
            name: data.name,
            houseNumber: data.houseNumber,
            street: data.street,
            streetNumber: extractStreetNumber(data.street),
            city: data.city,
            state: data.state,
            country: data.country,
            postalCode: data.postalCode,
            phoneNumber: data.phone,
            addressTypeId: 1,
            userId: user.id,
        }
        if (!user) {
            console.log("User is not logged in");
            setError(true);
            setMessage("User is not logged in");
            setSuccess(false);
            return;
        }
        console.log(address);
        const res = await createAddress(address);
        if (res instanceof Error) {
            console.log("Error adding address");
            setError(true);
            setMessage(res.message);
            setSuccess(false);
            return;
        }
        console.log("Address added successfully");
        setError(false);
        setMessage("Address added successfully");
        setSuccess(true);

    }

    useEffect(() => {
        if (user) {
            setAddresses(user.addresses);
        }
    }, [user]);

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
                            {/* Address Book content */}
                            <div className="col-span-3">
                                <div className="p-6 border rounded-lg shadow-md bg-white mb-2">
                                    <h2 className="text-2xl font-semibold mb-6">My Address Book</h2>
                                    <p>
                                        You can manage your addresses here. You can add, edit, or delete your addresses. You can also set a default address for your orders.
                                    </p>
                                    {/* Address List */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {addresses && addresses.length > 0 ? (
                                            addresses.map((address) => (
                                                <div
                                                    key={address.id}
                                                    className="p-6 border rounded-lg shadow-md bg-white hover:transition-all"
                                                >
                                                    <div className="flex flex-row justify-between items-center border-b">
                                                        <div className="py-3">
                                                            <h3 className="text-xl font-semibold">{address.name}</h3>
                                                        </div>
                                                        <span onClick={() => handleDeleteAddress(address.id)}>
                                                            <TiDelete className="hover:text-red-400 hover:cursor-pointer" />
                                                        </span>
                                                    </div>
                                                    <div className="py-2 my-2 capitalize">
                                                        <p>{address.street} {address.streetNumber} <span className="uppercase">{address.houseNumber}</span></p>
                                                        <p>{address.city}, {address.postalCode}</p>
                                                        <p>{address.state}, {address.country}</p>
                                                        <p>{address.phoneNumber}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex flex-row justify-center items-center">
                                                <p>No addresses found. Please add an address.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Add New Address Form */}
                                <div className="p-6 border rounded-lg shadow-md bg-white ">
                                    <h3 className="text-xl font-semibold mb-4">Add New Address</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} id="addNewAddress">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 w-full">Name <span className="text-red-500">*</span></label>
                                                <input
                                                    {...register("name")}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-500" : ""}`}
                                                />
                                                {errors.name && <p className="text-red-500 text-sm my-2">{errors.name.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">House Number <span className="text-red-500">*</span></label>
                                                <input
                                                    {...register("houseNumber")}
                                                    type="text"
                                                    id="houseNumber"
                                                    name="houseNumber"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.houseNumber ? "border-red-500" : ""}`}
                                                />
                                                {errors.houseNumber && <p className="text-red-500 text-sm my-2">{errors.houseNumber.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address <span className="text-red-500">*</span></label>
                                                <input
                                                    {...register("street")}
                                                    type="text"
                                                    id="street"
                                                    name="street"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.street ? "border-red-500" : ""}`}
                                                />
                                                {errors.street && <p className="text-red-500 text-sm my-2">{errors.street.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City <span className="text-red-500">*</span></label>
                                                <input
                                                    {...register("city")}
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.city ? "border-red-500" : ""}`}
                                                />
                                                {errors.city && <p className="text-red-500 text-sm my-2">{errors.city.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code <span className="text-red-500">*</span></label>
                                                <input
                                                    {...register("postalCode")}
                                                    type="text"
                                                    id="postalCode"
                                                    name="postalCode"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.postalCode ? "border-red-500" : ""}`}
                                                />
                                                {errors.postalCode && <p className="text-red-500 text-sm my-2">{errors.postalCode.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                                <input
                                                    {...register("state")}
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country <span className="text-red-500">*</span></label>
                                                <input
                                                    {...register("country")}
                                                    type="text"
                                                    id="country"
                                                    name="country"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.country ? "border-red-500" : ""}`}
                                                />
                                                {errors.country && <p className="text-red-500 text-sm my-2">{errors.country.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                                <input
                                                    {...register("phone")}
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.phone ? "border-red-500" : ""}`}
                                                />
                                                {errors.phone && <p className="text-red-500 text-sm my-2">{errors.phone.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="addressType" className="block text-sm font-medium text-gray-700">Address Type <span className="text-red-500">*</span></label>
                                                <select
                                                    {...register("addressType")}
                                                    id="addressType"
                                                    name="addressType"
                                                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.addressType ? "border-red-500" : ""}`}
                                                >
                                                    <option value="home">Home</option>
                                                    <option value="work">Work</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                {errors.addressType && <p className="text-red-500 text-sm my-2">{errors.addressType.message}</p>}
                                            </div>
                                            <div className="col-span-2">
                                                <input type="submit" value="Add Address" className="mt-2 w-full bg-indigo-600 text-white p-2 rounded-md cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            {error && <div className="bg-red-500 text-white rounded text-sm py-3 px-4">{message}</div>}
                                            {success && <div className="bg-green-500 text-white rounded text-sm py-3 px-4">{message}</div>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </CommonLayout>
        </>
    );
};

export default AddressBookPage;

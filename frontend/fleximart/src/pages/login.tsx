"use client";
import React, { useContext, useState } from "react";
import Image from 'next/image';
import CommonLayout from "@/components/CommonLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import Alert from "@/components/Alert";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required(),
    password: yup.string().required(),
});

type FormData = {
    email: string;
    password: string;
};

const Login = () => {

    const { authorizeUser } = useContext(UserContext);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data: FormData) => {
        console.log(data);
        const response = await authorizeUser(data);
        console.log(response);
        if (response.error) {
            setError(true);
            setMessage(response.message);
            setSuccess(false);
        } else {
            setSuccess(true);
            setMessage(response.message);
            setError(false);
        }
    };


    const path = [
        { name: "Home", href: "/" },
        { name: "Login", href: "/login" }
    ];

    const data = {
        title: "Login",
        path: path,
    };


    return (
        <CommonLayout data={data}>

            <section className="login-page section-b-space py-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Login Form Section */}
                        <div className="p-8 shadow-lg rounded-lg bg-white">
                            <h3 className="text-2xl font-bold mb-6">Login</h3>
                            <div className="theme-card">
                                <form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="form-label block mb-2 text-gray-700">Email</label>
                                        <input
                                            {...register("email")}
                                            id="email"
                                            placeholder="Email"
                                            type="email"
                                            className={`form-control w-full border border-gray-300 rounded px-4 py-2 ${errors.email ? 'border-red-500' : ''}`}
                                        />
                                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group mb-6">
                                        <label htmlFor="password" className="form-label block mb-2 text-gray-700">Password</label>
                                        <input
                                            {...register("password")}
                                            id="password"
                                            placeholder="Enter your password"
                                            type="password"
                                            className={`form-control w-full border border-gray-300 rounded px-4 py-2 ${errors.password ? 'border-red-500' : ''}`}
                                        />
                                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                    </div>
                                    <input type="submit" className="btn btn-solid bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition" value={"Login"} />
                                    {error &&
                                        <Alert message={message} messageStatus={"DANGER"} />}
                                    {success &&
                                        <Alert message={message} messageStatus={"SUCCESS"} />}
                                </form>
                            </div>
                        </div>

                        {/* New Customer Section */}
                        <div className="p-8 shadow-lg rounded-lg bg-white">
                            <h3 className="text-2xl font-bold mb-6">New Customer</h3>
                            <div className="theme-card">
                                <h6 className="text-lg font-semibold mb-4">Create An Account</h6>
                                <p className="mb-6">
                                    Sign up for a free account at our store. Registration is quick and easy.
                                    It allows you to be able to order from our shop. To start shopping click register.
                                </p>
                                <Link href="#" className="btn btn-solid bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
                                    Create an Account
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CommonLayout>
    );
}

export default Login;
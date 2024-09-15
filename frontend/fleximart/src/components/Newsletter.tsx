"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
});

const Newsletter = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);


    /**
     * onSubmit function to handle the form submission
     * @param data : { email: string } 
     */
    const onSubmit = (data: { email: string }) => {
        console.log(data);
        // TODO: Send the email to the server
    };

    return (
        <div className="bg-gray-100 border-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 flex flex-col justify-center">
                    <h2 className="text-black text-xl font-bold">KNOW IT ALL FIRST!</h2>
                    <p className="text-gray-600">
                        Never Miss Anything From Multikart By Signing Up To Our Newsletter.
                    </p>
                </div>
                {/* Add vertical margin for the border */}
                <div className="p-4 md:border-l md:border-gray-400 md:my-4 flex justify-end">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                {...register("email")}
                                className={`border border-gray-400 p-2 mr-2 w-64 ${errors.email ? "border-red-500" : ""}`}
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mt-2 py-2 px-4 bg-gray-500 text-white hover:bg-gray-600 hover:scale-110 focus:scale-110 transition-transform duration-300 ease-in-out"
                            >
                                Subscribe
                            </button>

                        </form>
                        <div className="my-2">
                            {errors.email && <p className="text-red-500 font-thin">{errors.email.message}</p>}
                            {error &&
                                <div className="bg-red-100 border border-red-500 text-red-800 px-4 py-3 rounded my-3">
                                    {message}
                                </div>
                            }
                            {success &&
                                <div className="bg-green-100 border border-green-500 text-green-800 px-4 py-3 rounded my-3">
                                    {message}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

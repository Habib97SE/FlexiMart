import CommonLayout from "@/components/CommonLayout";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterData } from "@/interface/UserResponse";
import { useUser } from "@/context/UserContext";


const schema = yup.object().shape({
    fname: yup.string().required("First Name is required"),
    lname: yup.string().required("Last Name is required"),
    email: yup.string().email("Enter a valid email.").required("Email is required"),
    telnr: yup.string().required("Phone number is required"),
    password: yup.string().required("Password is required").matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
    ),
    cpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup.boolean().oneOf([true], "You must accept the terms and conditions")
});


const RegisterPage = () => {
    const { registerUser } = useUser();

    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const data = {
        title: "Register Page",
        paths: [
            {
                name: "Home",
                href: "/"
            },
            {
                name: "Register",
                href: "/register"
            }
        ]
    }

    const onsubmit = async (data) => {
        const register: RegisterData = {
            firstName: data.fname,
            lastName: data.lname,
            email: data.email,
            password: data.password,
            phoneNumber: data.telnr
        }
        const result = await registerUser(register);
        console.log(result);
        if (result.error) {
            setSuccess(false);
            setError(true);
            setMessage(result.message);
            return;
        }
        setSuccess(true);
        setError(false);
        setMessage(result.message);
        return;

    }

    return (
        <>
            <CommonLayout data={data}>
                <section className="register-page py-12">
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div className="w-full lg:w-3/4 xl:w-1/2">
                                <h3 className="text-3xl font-bold mb-6 text-center">Create Account</h3>
                                <div className="bg-white shadow-md p-6 rounded-md">
                                    <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
                                        {/* First Name and Last Name */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="fname" className="block text-gray-700 font-medium mb-2">First Name</label>
                                                <input
                                                    {...register("fname")}
                                                    id="fname"
                                                    type="text"
                                                    placeholder="First Name"
                                                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.fname ? "border-red-500" : ""}`}
                                                />
                                                {errors.fname && <p className="text-red-500 text-sm my-2">{errors.fname.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="lname" className="block text-gray-700 font-medium mb-2">Last Name</label>
                                                <input
                                                    {...register("lname")}
                                                    id="lname"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.lname ? "border-red-500" : ""}`}
                                                />
                                                {errors.lname && <p className="text-red-500 text-sm my-2">{errors.lname.message}</p>}
                                            </div>
                                        </div>

                                        {/* Email and Phone number */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                                <input
                                                    {...register("email")}
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email ? "border-red-500" : ""}`}
                                                />
                                                {errors.email && <p className="text-red-500 text-sm my-2">{errors.email.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="telnr" className="block text-gray-700 font-medium mb-2">Phone no.</label>
                                                <input
                                                    {...register("telnr")}
                                                    id="telnr"
                                                    type="text"
                                                    placeholder="+46 70 123 45 67"
                                                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.telnr ? "border-red-500" : ""}`}
                                                />
                                                {errors.telnr && <p className="text-red-500 text-sm my-2">{errors.telnr.message}</p>}
                                            </div>
                                        </div>
                                        {/* Password and Confirm Password */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                                <input
                                                    {...register("password")}
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.password ? "border-red-500" : ""}`}
                                                />
                                                {errors.password && <p className="text-red-500 text-sm my-2">{errors.password.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="cpassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                                                <input
                                                    {...register("cpassword")}
                                                    id="cpassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.cpassword ? "border-red-500" : ""}`}
                                                />
                                                {errors.cpassword && <p className="text-red-500 text-sm my-2">{errors.cpassword.message}</p>}
                                            </div>
                                        </div>
                                        {/* Terms and Conditions */}
                                        <div className="flex items-center space-x-2">
                                            <input
                                                {...register("terms")}
                                                type="checkbox"
                                                id="terms"
                                                className={`border border-gray-300 rounded-md p-2 w-5 h-5 focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.terms ? "border-red-500" : ""}`}
                                            />
                                            <label htmlFor="terms" className="text-gray-700">I agree to the <a href="#" className="text-red-500">terms and conditions</a></label>

                                        </div>
                                        {/* Submit Button */}
                                        <div className="text-center">
                                            <input type="submit" value={"Create Account"} className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600" />

                                        </div>
                                        {error && <div className="py-2 px-3 my-2 text-white bg-red-500 rounded-md">{message}</div>}
                                        {success && <div className="py-2 px-3 my-2 text-white bg-green-500 rounded-md">{message}</div>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </CommonLayout>
        </>
    );

}

export default RegisterPage;
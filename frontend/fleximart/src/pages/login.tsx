"use client";
import React, {useContext, useState} from "react";
import CommonLayout from "@/components/CommonLayout";
import { useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "@/context/UserContext";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required(),
    password: yup.string().required(),
});

type FormData = {
    email: string;
    password: string;
};

const Login = () => {

    const {authorizeUser} = useContext(UserContext);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
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
        {name: "Home", href: "/"},
        {name: "Login", href: "/login"}
    ];

    const data = {
        title: "Login",
        path: path,
    };


    return (
        <CommonLayout data={data}>
            <h1>Login</h1>
            <div className={"fluid-container"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Email</label>
                        <input type="text" {...register("email")} className={`form-control border w-full rounded ${errors.email ? "border-red-500" : ""}`} />
                        <p
                            className={"text-red-500 font-thin"}
                        >{errors.email?.message}</p>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            className={`form-control border w-full rounded ${errors.password ? "border-red-500" : ""}`}
                        />
                        <p
                            className={"text-red-500 font-thin"}
                        >{errors.password?.message}</p>
                    </div>
                    <button
                        className={"px-3 py-2 bg-blue-500 text-white mt-2 hover:bg-blue-600 focus:outline-none"}
                        type="submit">Login</button>
                </form>
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
        </CommonLayout>
    );
}

export default Login;
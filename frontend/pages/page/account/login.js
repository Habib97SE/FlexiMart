"use client";
import React, { useContext, useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Form, Label, Input, Col } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { set } from "nprogress";
import { UserContext } from "../../../helpers/user/UserContext";
import { useRouter } from "next/router";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .matches(
            /[a-z]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .matches(
            /[0-9]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .matches(
            /[\W_]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
});

const Login = () => {
    const router = useRouter();
    const { user, userLoggedIn, loginUser } = useContext(UserContext);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const signinRequest = {
            email: data.email,
            password: data.password,
        };

        const response = await loginUser(signinRequest);
        console.log(response);
        // if no error
        if (response.success) {
            setSuccess(true);
            setError(false);
            setMessage("Login successful");
        } else {
            setError(true);
            setSuccess(false);
            setMessage(response.error);
        }
    };

    if (userLoggedIn) {
        // redirect to dashboard
        router.push("/pages/account/dashboard");
    }

    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form
                                    className="theme-form"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="form-group">
                                        <Label
                                            className="form-label"
                                            for="email"
                                        >
                                            Email
                                        </Label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    className={`form-control ${
                                                        errors.email
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    id="email"
                                                    placeholder="Email"
                                                />
                                            )}
                                        />
                                        {errors.email && (
                                            <div className="alert alert-danger">
                                                {errors.email?.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <Label
                                            className="form-label"
                                            for="password"
                                        >
                                            Password
                                        </Label>
                                        <div className="input-group">
                                            <Controller
                                                name="password"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        className={`form-control ${
                                                            errors.password
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="password"
                                                        placeholder="Enter your password"
                                                    />
                                                )}
                                            />
                                        </div>

                                        {errors.password && (
                                            <div className="alert alert-danger">
                                                {errors.password?.message}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-solid"
                                    >
                                        Login
                                    </button>
                                    {error && (
                                        <div className="alert alert-danger mt-3">
                                            {message}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="alert alert-success mt-3">
                                            {message}
                                        </div>
                                    )}
                                    <div className="footer-social">
                                        <ul>
                                            <li>
                                                <a
                                                    href="https://www.facebook.com"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-facebook"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://plus.google.com"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-google-plus"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>
                                    Sign up for a free account at our store.
                                    Registration is quick and easy. It allows
                                    you to be able to order from our shop. To
                                    start shopping click register.
                                </p>
                                <a href="#" className="btn btn-solid">
                                    Create an Account
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Login;

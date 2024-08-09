"use client";
import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Form, Label, Input, Col } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { set } from "nprogress";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
            /[\W_]/,
            "Password must contain at least one special character"
        ),
});

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

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

    const onSubmit = (data) => {
        setError(false);
        setSuccess(true);
        setMessage("Login successful");
        console.log(data);
    };

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
                                        <Controller
                                            name="password"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    type="password"
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
                                        {errors.email && (
                                            <div className="alert alert-danger">
                                                {errors.email?.message}
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

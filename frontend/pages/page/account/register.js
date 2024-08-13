"use client";
import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Input, Container, Row, Form, Label, Col } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import UserModel from "../../../src/models/UserModel";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
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
    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .min(5, "Phone Number must be at least 5 characters long")
        .max(15, "Phone Number must be at most 15 characters long"),
});

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            setError(true);
            setSuccess(false);
            setMessage("Passwords do not match");
            return;
        }
        const userDetail = {
            firstName: data.firstName,
            lastName: data.lastName,
            hashedPassword: data.password,
            email: data.email,
            phoneNumber: data.phoneNumber,
        };
        const response = await UserModel.register(userDetail);
        console.log(response);
        if (!response.error) {
            setError(false);
            setSuccess(true);
            setMessage("Account created successfully");
        } else {
            setError(true);
            setSuccess(false);
            setMessage(response.message);
        }
    };

    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>Create Account</h3>
                            <div className="theme-card">
                                <Form
                                    className="theme-form"
                                    onSubmit={handleSubmit(onSubmit)}
                                    id="register"
                                >
                                    <Row>
                                        <Col md="6">
                                            <Label
                                                className="form-label"
                                                for="firstName"
                                            >
                                                First Name
                                            </Label>
                                            <Controller
                                                name="firstName"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.firstName
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="firstName"
                                                        placeholder="First Name"
                                                    />
                                                )}
                                            />
                                            {errors.firstName && (
                                                <div className="alert alert-danger">
                                                    {errors.firstName?.message}
                                                </div>
                                            )}
                                        </Col>
                                        <Col md="6">
                                            <Label
                                                className="form-label"
                                                for="lastName"
                                            >
                                                Last Name
                                            </Label>
                                            <Controller
                                                name="lastName"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.lastName
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="lastName"
                                                        placeholder="Last Name"
                                                    />
                                                )}
                                            />
                                            {errors.lastName && (
                                                <div className="alert alert-danger">
                                                    {errors.lastName?.message}
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
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
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password?.message}
                                                </div>
                                            )}
                                        </Col>
                                        <Col md="6">
                                            <Label
                                                className="form-label"
                                                for="confirmPassword"
                                            >
                                                Confirm Password
                                            </Label>
                                            <Controller
                                                name="confirmPassword"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="password"
                                                        className={`form-control ${
                                                            errors.confirmPassword
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="confirmPassword"
                                                        placeholder="Confirm your password"
                                                    />
                                                )}
                                            />
                                            {errors.confirmPassword && (
                                                <div className="alert alert-danger">
                                                    {
                                                        errors.confirmPassword
                                                            ?.message
                                                    }
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
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
                                        </Col>
                                        <Col md="6">
                                            <Label
                                                className="form-label"
                                                for="phoneNumber"
                                            >
                                                Phone number
                                            </Label>
                                            <Controller
                                                name="phoneNumber"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.phoneNumber
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="phoneNumber"
                                                        placeholder="Enter your number"
                                                    />
                                                )}
                                            />
                                            {errors.phoneNumber && (
                                                <div className="alert alert-danger">
                                                    {
                                                        errors.phoneNumber
                                                            ?.message
                                                    }
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                    <Col md="12">
                                        <button
                                            type="submit"
                                            className="btn btn-solid w-auto"
                                        >
                                            Create Account
                                        </button>
                                    </Col>
                                    <Row>
                                        <Col md="12 my-1">
                                            {error && (
                                                <div className="alert alert-danger">
                                                    {message}
                                                </div>
                                            )}
                                            {success && (
                                                <div className="alert alert-success">
                                                    {message}
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Register;

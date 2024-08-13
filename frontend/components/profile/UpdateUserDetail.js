// UpdateUserDetail.js
import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../../helpers/user/UserContext";
import { useTooltip } from "../../helpers/TooltipContext";
import { Container, Row, Col, Form, Label, Input } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    nameSuffix: yup.string().required("Suffix is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    dateOfBirth: yup
        .string()
        .required("Date of birth is required")
        .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            "Date of birth must be in the format YYYY-MM-DD"
        ),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be a number"),
    email: yup.string().required("Email is required").email("Email is invalid"),
});

export default function UpdateUserDetail() {
    const { user, updateUserDetails } = useContext(UserContext);

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            nameSuffix: user.nameSuffix || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            dateOfBirth: user.dateOfBirth || "",
            phoneNumber: user.phoneNumber || "",
            email: user.email || "",
        },
    });

    // Reset form with user data when user data changes
    useEffect(() => {
        reset({
            nameSuffix: user.nameSuffix || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            dateOfBirth: user.dateOfBirth || "",
            phoneNumber: user.phoneNumber || "",
            email: user.email || "",
        });
    }, [user, reset]);

    const onSubmit = async (data) => {
        console.log(data); // data should now have a correct value for dateOfBirth

        const response = await updateUserDetails(data);

        if (response.success) {
            setError(false);
            setSuccess(true);
            setMessage("User details updated successfully");
        } else {
            setError(true);
            setSuccess(false);
            setMessage("Error updating user details");
        }
    };

    return (
        <Container>
            <Row>
                <Col sm="12">
                    <h3>Update Personal Details</h3>
                    <Form
                        className="theme-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Row>
                            <Col md="2">
                                <Label className="form-label" for="nameSuffix">
                                    Suffix
                                </Label>
                                <Controller
                                    name="nameSuffix"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="select"
                                            className={`form-control ${
                                                errors.nameSuffix
                                                    ? "is-invalid border border-danger"
                                                    : ""
                                            }`}
                                            id="nameSuffix"
                                        >
                                            <option value="">
                                                Select Suffix
                                            </option>
                                            <option>Mr.</option>
                                            <option>Mrs.</option>
                                            <option>Miss</option>
                                            <option>Ms.</option>
                                            <option>Mx.</option>
                                            <option>Dr.</option>
                                            <option>Prof.</option>
                                        </Input>
                                    )}
                                />
                                {errors.nameSuffix && (
                                    <div className="alert alert-danger">
                                        {errors.nameSuffix.message}
                                    </div>
                                )}
                            </Col>
                            <Col md="5">
                                <Label className="form-label" for="firstName">
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
                                                    ? "is-invalid border border-danger"
                                                    : ""
                                            }`}
                                            id="firstName"
                                            placeholder="Enter Your First Name"
                                        />
                                    )}
                                />
                                {errors.firstName && (
                                    <div className="alert alert-danger">
                                        {errors.firstName.message}
                                    </div>
                                )}
                            </Col>
                            <Col md="5">
                                <Label className="form-label" for="lastName">
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
                                                    ? "is-invalid border border-danger"
                                                    : ""
                                            }`}
                                            id="lastName"
                                            placeholder="Enter Your Last Name"
                                        />
                                    )}
                                />
                                {errors.lastName && (
                                    <div className="alert alert-danger">
                                        {errors.lastName.message}
                                    </div>
                                )}
                            </Col>
                            <Col md="2">
                                <Label className="form-label" for="dateOfBirth">
                                    Date Of Birth
                                </Label>
                                <Controller
                                    name="dateOfBirth"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="date"
                                            className={`form-control ${
                                                errors.dateOfBirth
                                                    ? "is-invalid border border-danger"
                                                    : ""
                                            }`}
                                            id="dateOfBirth"
                                        />
                                    )}
                                />
                                {errors.dateOfBirth && (
                                    <div className="alert alert-danger">
                                        {errors.dateOfBirth.message}
                                    </div>
                                )}
                            </Col>
                            <Col md="5">
                                <Label className="form-label" for="phoneNumber">
                                    Phone Number
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
                                                    ? "is-invalid border border-danger"
                                                    : ""
                                            }`}
                                            id="phoneNumber"
                                            placeholder="Enter Your Phone Number"
                                        />
                                    )}
                                />
                                {errors.phoneNumber && (
                                    <div className="alert alert-danger">
                                        {errors.phoneNumber.message}
                                    </div>
                                )}
                            </Col>
                            <Col md="5">
                                <Label className="form-label" for="email">
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
                                                    ? "is-invalid border border-danger"
                                                    : ""
                                            }`}
                                            id="email"
                                            placeholder="Enter Your Email"
                                        />
                                    )}
                                />
                                {errors.email && (
                                    <div className="alert alert-danger">
                                        {errors.email.message}
                                    </div>
                                )}
                            </Col>
                        </Row>
                        <Col md="12">
                            <button
                                className="btn btn-sm btn-solid"
                                type="submit"
                            >
                                Save Setting
                            </button>
                        </Col>
                        <Col md="12">
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
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

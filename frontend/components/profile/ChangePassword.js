import React from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object().shape({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup.string().required("New Password is required"),
    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

export default function ChangePassword() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Col sm="12" className="py-2">
            <h3>CHANGE PASSWORD</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md="8">
                        <Label for="oldPassword">Old Password</Label>
                        <Controller
                            control={control}
                            name="oldPassword"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="password"
                                    id="oldPassword"
                                    className={`form-control ${
                                        errors.oldPassword ? "is-invalid" : ""
                                    }`}
                                    placeholder="Old Password"
                                />
                            )}
                        />
                        {errors.oldPassword && (
                            <p className="text-danger">
                                {errors.oldPassword.message}
                            </p>
                        )}
                    </Col>
                    <Col md="8">
                        <Label for="newPassword">New Password</Label>
                        <Controller
                            control={control}
                            name="newPassword"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="password"
                                    id="newPassword"
                                    className={`form-control ${
                                        errors.newPassword ? "is-invalid" : ""
                                    }`}
                                    placeholder="New Password"
                                />
                            )}
                        />
                        {errors.newPassword && (
                            <p className="text-danger">
                                {errors.newPassword.message}
                            </p>
                        )}
                    </Col>
                    <Col md="8" className="my-2">
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className={`form-control ${
                                        errors.confirmPassword
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                            )}
                        />
                        {errors.confirmPassword && (
                            <p className="text-danger">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </Col>
                    <Col md="6">
                        <button className="btn btn-sm btn-solid">
                            Change Password
                        </button>
                    </Col>
                    {error && (
                        <div className="alert alert-danger mt-3">{message}</div>
                    )}
                    {success && (
                        <div className="alert alert-success mt-3">
                            {message}
                        </div>
                    )}
                </Row>
            </Form>
            <hr />
        </Col>
    );
}

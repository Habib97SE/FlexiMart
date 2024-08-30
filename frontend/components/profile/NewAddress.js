"use client";
import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";
import AddressModel from "../../src/models/AddressModel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../../helpers/user/UserContext";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    houseNumber: yup.string().required("House number is required"),
    streetAddress: yup.string().required("Street address is required"),
    postalCode: yup.string().required("Postal code is required"),
    city: yup.string().required("City is required"),
    regionState: yup.string(),
    country: yup.string().required("Country is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    addressType: yup.string().required("Address type is required"),
});

export default function NewAddress() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const { addressTypes, user, addNewAddress } = useContext(UserContext);

    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo, Democratic Republic of the",
        "Congo, Republic of the",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, North",
        "Korea, South",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];

    const countryOptions = countries.map((country) => (
        <option key={country} value={country}>
            {country}
        </option>
    ));

    /**
     * Extracts the street name and number from a full street address.
     * Assumes the last word is the street number if it starts with digits; otherwise, the whole string is the street name.
     *
     * @param {string} fullStreet - The full street address input by the user (e.g., "Allegatan 178", "Armlängdsgatan 17c").
     * @returns {object} An object containing streetName and streetNumber.
     */
    function extractStreetComponents(fullStreet) {
        // Trim any leading/trailing spaces
        fullStreet = fullStreet.trim();

        // Split the street into words
        const words = fullStreet.split(" ");

        // Check if the last word starts with a digit
        const lastWord = words[words.length - 1];
        const isNumberWithOptionalLetter = /^\d+[a-zA-Z]*$/.test(lastWord);

        if (isNumberWithOptionalLetter) {
            return {
                streetName: words.slice(0, -1).join(" "), // Join everything except the last word
                streetNumber: lastWord, // The last word is the street number (with optional letter)
            };
        } else {
            // If no number is found, treat the entire input as the street name
            return {
                streetName: fullStreet, // Treat the full input as the street name
                streetNumber: "", // No number found
            };
        }
    }

    const onSubmit = async (data) => {
        console.log(data);
        const { streetName, streetNumber } = extractStreetComponents(
            data.streetAddress
        );
        const address = {
            name: data.name,
            houseNumber: data.houseNumber,
            street: streetName,
            streetNumber: streetNumber,
            city: data.city,
            state: data.regionState,
            country: data.country,
            postalCode: data.postalCode,
            phoneNumber: data.phoneNumber,
            userId: user.id,
            addressTypeId: parseInt(data.addressType),
        };
        console.log(address);
        const response = await addNewAddress(address);
        console.log(response);
        if (!response.error) {
            setSuccess(true);
            setError(false);
            setMessage("Address created successfully");
        } else {
            setSuccess(false);
            setError(true);
            setMessage(response.message);
        }
    };

    console.log(addressTypes);

    return (
        <section
            className="contact-page register-page section-b-space"
            id="profile-new-address-form-div"
        >
            <Container>
                <Row>
                    <Col sm="12" className="py-2">
                        <h3>New Address</h3>
                        <p>
                            You can add multiple addresses, but the default
                            address will be used as the primary address.
                        </p>
                        <Form
                            className="theme-form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Row>
                                <Col md="6">
                                    <Label className="form-label" for="name">
                                        Name{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                className={`form-control ${
                                                    errors.name
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                id="name"
                                                placeholder="Name of the Address"
                                            />
                                        )}
                                    />
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="6">
                                    <Label
                                        className="form-label"
                                        for="houseNumber"
                                    >
                                        House Number or Company Name{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="houseNumber"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                className={`form-control ${
                                                    errors.houseNumber
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                id="houseNumber"
                                                placeholder="Enter house number, company name, flat number, floor, building, or care of (c/o)"
                                            />
                                        )}
                                    />
                                    {errors.houseNumber && (
                                        <div className="alert alert-danger">
                                            {errors.houseNumber.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="6">
                                    <Label
                                        className="form-label"
                                        for="streetAddress"
                                    >
                                        Street Address{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="streetAddress"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                className={`form-control ${
                                                    errors.streetAddress
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                id="streetAddress"
                                                placeholder="John Doe 187"
                                            />
                                        )}
                                    />
                                    {errors.streetAddress && (
                                        <div className="alert alert-danger">
                                            {errors.streetAddress.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="2">
                                    <Label
                                        className="form-label"
                                        for="postalCode"
                                    >
                                        Postal Code{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="postalCode"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                className={`form-control ${
                                                    errors.postalCode
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                id="postalCode"
                                                placeholder="124 56"
                                            />
                                        )}
                                    />
                                    {errors.postalCode && (
                                        <div className="alert alert-danger">
                                            {errors.postalCode.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="4">
                                    <Label className="form-label" for="city">
                                        City{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                className={`form-control ${
                                                    errors.city
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                id="city"
                                                placeholder="City"
                                            />
                                        )}
                                    />
                                    {errors.city && (
                                        <div className="alert alert-danger">
                                            {errors.city.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="6">
                                    <Label
                                        className="form-label"
                                        for="regionState"
                                    >
                                        Region/State
                                    </Label>
                                    <Controller
                                        name="regionState"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                type="text"
                                                className={`form-control ${
                                                    errors.regionState
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                id="regionState"
                                                placeholder="Region/state"
                                            />
                                        )}
                                    />
                                    {errors.regionState && (
                                        <div className="alert alert-danger">
                                            {errors.regionState.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="6" className="select_input">
                                    <Label className="form-label" for="country">
                                        Country{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="country"
                                        control={control}
                                        render={({ field }) => (
                                            <select
                                                {...field}
                                                id="country"
                                                className={`form-select py-2 ${
                                                    errors.country
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                size="1"
                                            >
                                                {countryOptions}
                                            </select>
                                        )}
                                    />
                                    {errors.country && (
                                        <div className="my-1 alert alert-danger">
                                            {errors.country.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="6">
                                    <Label
                                        className="form-label"
                                        for="phoneNumber"
                                    >
                                        Phone Number{" "}
                                        <span className="text-danger">*</span>
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
                                                placeholder="Enter your number"
                                            />
                                        )}
                                    />
                                    {errors.phoneNumber && (
                                        <div className="alert alert-danger">
                                            {errors.phoneNumber.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="6">
                                    <Label
                                        className="form-label"
                                        for="addressType"
                                    >
                                        Address Type{" "}
                                        <span className="text-danger">*</span>
                                    </Label>
                                    <Controller
                                        name="addressType"
                                        control={control}
                                        render={({ field }) => (
                                            <select
                                                {...field}
                                                className={`form-select py-2 ${
                                                    errors.addressType
                                                        ? "is-invalid border border-danger"
                                                        : ""
                                                }`}
                                                size="1"
                                                id="addressType"
                                            >
                                                {addressTypes.map(
                                                    (addressType) => (
                                                        <option
                                                            key={addressType.id}
                                                            value={
                                                                addressType.id
                                                            }
                                                        >
                                                            {addressType.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    />
                                    {errors.addressType && (
                                        <div className="my-1 alert alert-danger">
                                            {errors.addressType.message}
                                        </div>
                                    )}
                                </Col>
                                <Col md="12">
                                    <button
                                        className="btn btn-sm btn-solid "
                                        type="submit"
                                    >
                                        Save setting
                                    </button>
                                </Col>
                                <Col md="12" className="my-2">
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
                    </Col>
                </Row>
                <hr />
            </Container>
        </section>
    );
}

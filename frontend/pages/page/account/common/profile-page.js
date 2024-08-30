import React, { useContext, useEffect } from "react";
import { Container, Row, Form, Input, Label, Col } from "reactstrap";
import AddressModel from "../../../../src/models/AddressModel";
import NewAddress from "../../../../components/profile/NewAddress";
import UpdateUserDetail from "../../../../components/profile/UpdateUserDetail";
import { UserContext } from "../../../../helpers/user/UserContext";
import { useTooltip } from "../../../../helpers/TooltipContext";
import ChangePassword from "../../../../components/profile/ChangePassword";

const ProfilePage = () => {
    const { user, addressTypes, deleteAddress } = useContext(UserContext);
    const { showTooltip } = useTooltip();

    const showAddressTypeIcon = (addressType) => {
        if (!isNaN(addressType)) {
            return (
                addressTypes.find((type) => type.id === addressType)?.icon || ""
            );
        }
        return addressType.icon;
    };

    const showAddressTypeName = (addressType) => {
        if (!isNaN(addressType)) {
            return (
                addressTypes.find((type) => type.id === addressType)?.name || ""
            );
        }
        return addressType.name;
    };

    const handleClickTrash = async (id) => {
        const response = await deleteAddress(id);
        console.log(response);
        if (response.success) {
            showTooltip("Address deleted successfully", false);
        } else {
            showTooltip("Error deleting address", true);
        }
    };

    useEffect(() => {
        console.log(user);
    });

    return (
        <>
            <section className="contact-page register-page">
                <Container>
                    <Row className="my-4">
                        <Col sm="12">
                            <h3>ADDRESS BOOK</h3>
                            <p>
                                The following addresses will be used on the
                                checkout page by default.
                            </p>
                        </Col>

                        <Col sm="12">
                            <Row className="text-capitalize">
                                {user.addresses.length === 0 ? (
                                    <Col md="12">
                                        <div
                                            className="card new-box"
                                            style={{ minHeight: "300px" }}
                                        >
                                            <div className="card-body d-flex justify-content-center align-items-center">
                                                <h5 className="fw-bold">
                                                    <i className="fa fa-plus"></i>{" "}
                                                    Add new address
                                                </h5>
                                            </div>
                                        </div>
                                    </Col>
                                ) : (
                                    user.addresses.map((address) => (
                                        <Col
                                            md="4"
                                            key={address.id}
                                            className="mb-4"
                                        >
                                            <div
                                                className="card"
                                                style={{ minHeight: "300px" }}
                                            >
                                                <div className="card-header">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5 className="fw-bold">
                                                            <i
                                                                style={{
                                                                    fontSize:
                                                                        "1.5rem",
                                                                }}
                                                                className={
                                                                    showAddressTypeIcon(
                                                                        address.addressType
                                                                    ) + " me-2"
                                                                }
                                                            ></i>
                                                            {address.name}
                                                        </h5>
                                                        <span
                                                            style={{
                                                                cursor: "pointer",
                                                                fontSize:
                                                                    "1.5rem",
                                                            }}
                                                            onClick={() =>
                                                                handleClickTrash(
                                                                    address.id
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-trash text-danger"></i>
                                                        </span>
                                                    </div>
                                                    <h6 className="fw-bold">
                                                        {showAddressTypeName(
                                                            address.addressType
                                                        )}
                                                    </h6>
                                                </div>
                                                <div className="card-body">
                                                    <p>
                                                        {address.houseNumber}{" "}
                                                        {address.street}{" "}
                                                        {address.streetNumber}
                                                    </p>
                                                    <p>{address.city}</p>
                                                    <p>{address.state}</p>
                                                    <p>{address.country}</p>
                                                    <p>{address.zipCode}</p>
                                                    <p>{address.phoneNumber}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                )}
                                <Col md="4">
                                    <div
                                        className="card new-box"
                                        style={{ minHeight: "300px" }}
                                    >
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <a href="#profile-new-address-form-div">
                                                <h5 className="fw-bold">
                                                    <i className="fa fa-plus"></i>{" "}
                                                    Add new address
                                                </h5>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <hr />
                    </Row>
                    <Row>
                        {/* Update password */}
                        <ChangePassword />
                    </Row>
                    <UpdateUserDetail />
                </Container>
            </section>
            <NewAddress />
        </>
    );
};

export default ProfilePage;

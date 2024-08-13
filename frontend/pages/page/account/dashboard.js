import React, { useEffect, useState, useContext } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { UserContext } from "../../../helpers/user/UserContext";

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [accountInfo, setAccountInfo] = useState(false);

    return (
        <CommonLayout parent="home" title="dashboard">
            <section className="section-b-space">
                <Container>
                    <Row>
                        {/* Sidebar for Large Screens */}
                        <Col lg="3" className="d-none d-lg-block">
                            <div className="dashboard-left">
                                <div className="block-content">
                                    <ul>
                                        <li className="active">
                                            <a href="/page/account/dashboard">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Order History</a>
                                        </li>
                                        <li>
                                            <a href="#">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="#">Settings</a>
                                        </li>
                                        <li className="last">
                                            <a href="#">Log Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        {/* Navbar for Small Screens */}
                        <Col xs="12" className="d-lg-none mb-3">
                            <Navbar color="light" light expand="md">
                                <button
                                    className="navbar-toggler"
                                    onClick={() => setAccountInfo(!accountInfo)}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                {accountInfo && (
                                    <Nav className="flex-column">
                                        <NavItem>
                                            <NavLink href="/page/account/dashboard">
                                                Dashboard
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                Order History
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">Wishlist</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">Settings</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">Log Out</NavLink>
                                        </NavItem>
                                    </Nav>
                                )}
                            </Navbar>
                        </Col>

                        <Col lg="9">
                            <div className="dashboard-right">
                                <div className="dashboard">
                                    <div className="page-title">
                                        <h2>
                                            Hello,{" "}
                                            {user.firstName +
                                                " " +
                                                user.lastName}
                                        </h2>
                                    </div>
                                    <div className="welcome-msg">
                                        <p>
                                            From your dashboard you have the
                                            ability to view a snapshot of your
                                            recent account activity and update
                                            your account information. Select a
                                            link below to view or edit
                                            information.
                                        </p>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="box-head">
                                            <h2>Account Information</h2>
                                        </div>
                                        <Row>
                                            <Col sm="6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>
                                                            Contact Information
                                                        </h3>
                                                        <a href="#">Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <h6 className="text-capitalize">
                                                            {user.firstName +
                                                                " " +
                                                                user.lastName}
                                                        </h6>
                                                        <h6 className="text-lowercase">
                                                            {user.email}
                                                        </h6>
                                                        <h6 className="text-lowercase">
                                                            {user.phoneNumber}
                                                        </h6>
                                                        <h6>
                                                            <a href="#">
                                                                Change Password
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Newsletters</h3>
                                                        <a href="#">Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <p>
                                                            You are currently
                                                            not subscribed to
                                                            any newsletter.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div>
                                            <div className="box">
                                                <div className="box-title">
                                                    <h3>Address Book</h3>
                                                    <a href="#">
                                                        Manage Addresses
                                                    </a>
                                                </div>
                                                <Row>
                                                    <Col sm="6">
                                                        <h6>
                                                            Default Billing
                                                            Address
                                                        </h6>
                                                        <address>
                                                            You have not set a
                                                            default billing
                                                            address.
                                                            <br />
                                                            <a href="#">
                                                                Edit Address
                                                            </a>
                                                        </address>
                                                    </Col>
                                                    <Col sm="6">
                                                        <h6>
                                                            Default Shipping
                                                            Address
                                                        </h6>
                                                        <address>
                                                            You have not set a
                                                            default shipping
                                                            address.
                                                            <br />
                                                            <a href="#">
                                                                Edit Address
                                                            </a>
                                                        </address>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Dashboard;

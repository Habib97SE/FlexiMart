import React, { useEffect, useState, useContext } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { UserContext } from "../../../helpers/user/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";

const Dashboard = () => {
    const router = useRouter();
    const { user, userLoggedIn, logoutUser } = useContext(UserContext);
    const [accountInfo, setAccountInfo] = useState(false);

    const handleLogout = () => {
        logoutUser();
        router.push("/page/account/login");
    };

    // if user is not sett in the context, redirect to login page
    if (!userLoggedIn) {
        router.push("/page/account/login");
        return;
    }

    return (
        <CommonLayout parent="home" title="dashboard">
            <section className="section-b-space">
                <Container>
                    <Row>
                        <ProfileSidebar activeItem={"dashboard"} />
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
                                                    <Link href="/page/account/profile">
                                                        Manage Addresses
                                                    </Link>
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

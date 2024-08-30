import React, { useContext } from "react";
import { Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { useRouter } from "next/router";
import { UserContext } from "../../helpers/user/UserContext";

export default function ProfileSidebar({ activeItem }) {
    const { logoutUser } = useContext(UserContext);
    const router = useRouter();

    const isItemActive = (item) => {
        return item === activeItem ? "active" : "";
    };

    const handleClickLogout = () => {
        logoutUser();
        router.push("/page/account/login");
    };

    return (
        <>
            {/* Sidebar for Large Screens */}
            <Col lg="3" className="d-none d-lg-block">
                <div className="dashboard-left">
                    <div className="block-content">
                        <ul>
                            <li className={`${isItemActive("dashboard")}`}>
                                <a href="/page/account/dashboard">Dashboard</a>
                            </li>
                            <li className={`${isItemActive("myorders")}`}>
                                <a href="/page/account/myorder">My Orders</a>
                            </li>
                            <li className={`${isItemActive("wishlist")}`}>
                                <a href="/page/account/wishlist">Wishlist</a>
                            </li>
                            <li className={`${isItemActive("settings")}`}>
                                <a href="/page/account/settings">Settings</a>
                            </li>
                            <li
                                className={`${isItemActive("logout")}`}
                                onClick={handleClickLogout}
                            >
                                <a href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>

            {/* Navbar for Small Screens */}
            <Col xs="12" className="d-lg-none mb-3">
                <Navbar color="light" light expand="md">
                    <Nav className="flex-column">
                        <NavItem
                            className={`${
                                isItemActive("dashboard") ? "active" : ""
                            }`}
                        >
                            <NavLink href="/page/account/dashboard">
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={`${
                                isItemActive("myorders") ? "active" : ""
                            }`}
                        >
                            <NavLink href="/page/account/myorder">
                                Order History
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={`${
                                isItemActive("wishlist") ? "active" : ""
                            }`}
                        >
                            <NavLink href="/page/account/wishlist">
                                Wishlist
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={`${
                                isItemActive("settings") ? "active" : ""
                            }`}
                        >
                            <NavLink href="/page/account/settings">
                                Settings
                            </NavLink>
                        </NavItem>
                        <NavItem
                            className={`${
                                isItemActive("logout") ? "active" : ""
                            }`}
                        >
                            <NavLink
                                href="/page/account/logout"
                                onClick={handleClickLogout}
                            >
                                Log Out
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Col>
        </>
    );
}

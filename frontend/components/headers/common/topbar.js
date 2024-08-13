import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { UserContext } from "../../../helpers/user/UserContext";

const TopBar = ({ topClass }) => {
    const { user, userLoggedIn } = useContext(UserContext);

    const UserDropDownMenu = () => {
        console.log("userLoggedIn in top bar.");
        if (userLoggedIn) {
            return (
                <ul className="header-dropdown">
                    <li className="mobile-wishlist compare-mobile">
                        <Link href={`/page/compare`}>
                            <i className="fa fa-random" aria-hidden="true"></i>
                            {"compare"}
                        </Link>
                    </li>
                    <li className="mobile-wishlist">
                        <Link href={`/page/account/wishlist`}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            {"wishlist"}
                        </Link>
                    </li>
                    <li className="onhover-dropdown mobile-account">
                        <i className="fa fa-user" aria-hidden="true"></i>{" "}
                        {"My account"}
                        <ul className="onhover-show-div">
                            <li>
                                <Link href={"/pages/account/dashboard"}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/pages/account/orders"}>
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link href={"/pages/account/wishlist"}>
                                    Wishlists
                                </Link>
                            </li>
                            <li>
                                <Link href={"/pages/account/profile"}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href={"/pages/account/logout"}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
        return (
            <ul className="header-dropdown">
                <li className="mobile-wishlist compare-mobile">
                    <Link href={`/page/compare`}>
                        <i className="fa fa-random" aria-hidden="true"></i>
                        {"compare"}
                    </Link>
                </li>
                <li className="mobile-wishlist">
                    <Link href={`/page/account/wishlist`}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        {"wishlist"}
                    </Link>
                </li>
                <li className="onhover-dropdown mobile-account">
                    <i className="fa fa-user" aria-hidden="true"></i>{" "}
                    {"My account"}
                    <ul className="onhover-show-div">
                        <li>
                            <Link href={`/page/account/login`}>Login</Link>
                        </li>
                        <li>
                            <Link href={`/page/account/register`}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    };

    return (
        <div
            id="topHeader"
            className={`top-header ${topClass ? topClass : ""}`}
        >
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Our store Watch</li>
                                <li>
                                    <i
                                        className="fa fa-phone"
                                        aria-hidden="true"
                                    ></i>
                                    {"Call Us"}: 123 - 456 - 7890
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-end">
                        <UserDropDownMenu />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;

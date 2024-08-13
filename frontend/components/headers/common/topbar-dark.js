import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "../../../helpers/user/UserContext";

const TopBarDark = ({ topClass, fluid }) => {
    const { user, userLoggedIn, setUserLoggedIn } = useContext(UserContext);
    const router = useRouter();
    const Logout = () => {
        setUserLoggedIn(false);
        localStorage.setItem("user", false);
        router.push("/page/account/login-auth");
    };

    const UserDropDownMenu = () => {
        console.log("userLoggedIn in top bar dark.");
        console.log(userLoggedIn);
        if (userLoggedIn) {
            return (
                <ul className="header-dropdown">
                    <li>
                        <Link href={"/pages/account/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href={"/pages/account/orders"}>Orders</Link>
                    </li>
                    <li>
                        <Link href={"/pages/account/wishlist"}>Wishlists</Link>
                    </li>
                    <li>
                        <Link href={"/pages/account/profile"}>Profile</Link>
                    </li>
                    <li>
                        <Link href={"/pages/account/logout"}>Logout</Link>
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
                            <Link href={"/pages/account/login"}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/pages/account/register"}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    };

    return (
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li>
                                    Welcome to Our store WATCHSHSHSHSHSHSHSH
                                </li>
                                <li>
                                    <i
                                        className="fa fa-phone text-white"
                                        aria-hidden="true"
                                    ></i>
                                    Call Us: 123 - 456 - 7890
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-end">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist">
                                <Link href="/page/account/wishlist">
                                    {/* <a> */}
                                    <i
                                        className="fa fa-heart"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    wishlist
                                    {/* </a> */}
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                ></i>{" "}
                                My Account
                                <ul className="onhover-show-div">
                                    <UserDropDownMenu />
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBarDark;

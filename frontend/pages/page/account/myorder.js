import React, { useContext, useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import CommonLayout from "../../../components/shop/common-layout";
import { UserContext } from "../../../helpers/user/UserContext";

const MyOrderListItem = ({ order }) => {
    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>{order.total}</td>
            <td>
                <a href="#">View Order</a>
            </td>
        </tr>
    );
};

const MyOrder = () => {
    const { user } = useContext(UserContext);
    const [accountInfo, setAccountInfo] = useState(false);

    return (
        <CommonLayout parent="home" title="myorder">
            <section className="section-b-space">
                <Container>
                    <Row>
                        {/* Sidebar for Large Screens */}
                        <Col lg="3" className="d-none d-lg-block">
                            <div className="dashboard-left">
                                <div className="block-content">
                                    <ul>
                                        <li>
                                            <a href="/page/account/dashboard">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">My Orders</a>
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
                                            Here you can view your orders and
                                            manage them. If you have any
                                            questions, feel free to contact us.{" "}
                                        </p>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Order #</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>01/01/2021</td>
                                                        <td>Processing</td>
                                                        <td>$100.00</td>
                                                        <td>
                                                            <a href="#">
                                                                View Order
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>01/01/2021</td>
                                                        <td>Processing</td>
                                                        <td>$100.00</td>
                                                        <td>
                                                            <a href="#">
                                                                View Order
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>01/01/2021</td>
                                                        <td>Processing</td>
                                                        <td>$100.00</td>
                                                        <td>
                                                            <a href="#">
                                                                View Order
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>01/01/2021</td>
                                                        <td>Processing</td>
                                                        <td>$100.00</td>
                                                        <td>
                                                            <a href="#">
                                                                View Order
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>01/01/2021</td>
                                                        <td>Processing</td>
                                                        <td>$100.00</td>
                                                        <td>
                                                            <a href="#">
                                                                View Order
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default MyOrder;

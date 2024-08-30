import React, { useContext, useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import CommonLayout from "../../../components/shop/common-layout";
import { UserContext } from "../../../helpers/user/UserContext";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";

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

    console.log(user.orders);

    return (
        <CommonLayout parent="home" title="myorder">
            <section className="section-b-space">
                <Container>
                    <Row>
                        <ProfileSidebar activeItem={"myorders"} />
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
                                                    {user.orders.length ===
                                                    0 ? (
                                                        <tr>
                                                            <td colSpan="5 fw-bold text-danger">
                                                                No orders found
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        user.orders.map(
                                                            (order) => (
                                                                <MyOrderListItem
                                                                    key={
                                                                        order.id
                                                                    }
                                                                    order={
                                                                        order
                                                                    }
                                                                />
                                                            )
                                                        )
                                                    )}
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

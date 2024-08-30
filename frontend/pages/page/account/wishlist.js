import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import WishlistPage from "./common/wishlist-page";
import { Row, Col, Container } from "reactstrap";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";

const Wishliat = () => {
    return (
        <CommonLayout parent="home" title="wishlist">
            <section className="section-b-space">
                <Container>
                    <Row>
                        <ProfileSidebar activeItem={"wishlist"} />
                        <Col lg="9">
                            <WishlistPage />
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Wishliat;

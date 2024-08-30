import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import ProfilePage from "./common/profile-page";
import { Container, Row, Col } from "reactstrap";
import ProfileSidebar from "../../../components/profile/ProfileSidebar";

const Profile = () => {
    return (
        <CommonLayout parent="home" title="settings">
            <section className="section-b-space">
                <Container>
                    <Row>
                        <ProfileSidebar activeItem={"settings"} />
                        <Col lg="9">
                            <ProfilePage />
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    );
};

export default Profile;

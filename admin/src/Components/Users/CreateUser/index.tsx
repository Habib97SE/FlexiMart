import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import UserTabs from "./UserTabs";

const CreateUser = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Create User" parent="Users" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Add User" />
              <CardBody>
                <UserTabs />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateUser;

import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import UserTabs from "@/Components/Users/CreateUser/UserTabs";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const CreateVendors = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Create Vendor" parent="Vendors" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Add Vendor" />
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

export default CreateVendors;

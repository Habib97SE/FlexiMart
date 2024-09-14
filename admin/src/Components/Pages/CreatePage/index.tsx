import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Fragment } from "react";
import { Card, CardBody, Container } from "reactstrap";
import PageTabs from "./PageTabs";

const CreatePage = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Create Page" parent="Pages" />
      <Container fluid>
        <Card>
          <CommonCardHeader title="Add Page" />
          <CardBody>
            <PageTabs />
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default CreatePage;

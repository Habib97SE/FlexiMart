import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import GeneralForm from "./GeneralForm";
import MetaDataForm from "./MetaDataForm";
import DescriptionForm from "./DescriptionForm";

const AddDigitalProduct = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Add Products" parent="Digital" />
      <Container fluid>
        <Row className="product-adding">
          <Col xl="6">
            <GeneralForm />
          </Col>
          <Col xl="6">
            <DescriptionForm />
            <MetaDataForm />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddDigitalProduct;

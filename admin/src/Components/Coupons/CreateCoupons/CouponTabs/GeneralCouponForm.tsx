import { Col, Form, Row } from "reactstrap";
import GeneralFormBottom from "./GeneralFormBottom";
import GeneFormTop from "./GeneralFormTop";

const GeneralCouponForm = () => {
  return (
    <Form className="needs-validation" noValidate>
      <h4>General</h4>
      <Row>
        <Col sm="12">
          <GeneFormTop />
          <GeneralFormBottom />
        </Col>
      </Row>
    </Form>
  );
};

export default GeneralCouponForm;

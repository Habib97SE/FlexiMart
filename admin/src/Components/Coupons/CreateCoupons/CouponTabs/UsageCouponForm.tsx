import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const UsageForm = () => {
  return (
    <Form className="needs-validation" noValidate>
      <h4>Usage Limits</h4>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Per Limit</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom6" type="number" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Per Customer</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom7" type="number" />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default UsageForm;

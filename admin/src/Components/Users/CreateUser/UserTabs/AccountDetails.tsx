import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const AccountDetails = () => {
  return (
    <Form className="needs-validation user-add" noValidate>
      <h4>Account Details</h4>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* First Name</Label>
          </Col>
          <Col xl="8" md="7">
            <Input id="validationCustom0" type="text" required />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Last Name</Label>
          </Col>
          <Col xl="8" md="7">
            <Input id="validationCustom1" type="text" required />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Email</Label>
          </Col>
          <Col xl="8" md="7">
            <Input id="validationCustom2" type="text" required />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Password</Label>
          </Col>
          <Col xl="8" md="7">
            <Input id="validationCustom3" type="password" required />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Confirm Password</Label>
          </Col>
          <Col xl="8" md="7">
            <Input id="validationCustom4" type="password" required />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default AccountDetails;

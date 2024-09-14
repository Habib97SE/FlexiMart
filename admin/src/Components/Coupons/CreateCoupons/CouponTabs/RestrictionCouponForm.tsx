import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const RestrictionForm = () => {
  return (
    <Form className="needs-validation" noValidate>
      <h4>Restriction</h4>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Products</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom3" type="text" required />
          </Col>
          <div className="valid-feedback">Please Provide a Product Name.</div>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Category</Label>
          </Col>
          <Col md="7">
            <select className="form-select" required>
              <option value="">--Select--</option>
              <option value="1">Electronics</option>
              <option value="2">Clothes</option>
              <option value="2">Shoes</option>
              <option value="2">Digital</option>
            </select>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Minimum Spend</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom4" type="number" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Maximum Spend</Label>
          </Col>
          <Col md="7">
            <Input id="validationCustom5" type="number" />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default RestrictionForm;

import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const GeneralFormBottom = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Free Shipping</Label>
          </Col>
          <Col md="7">
            <Label className="d-block">
              <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />
              Allow Free Shipping
            </Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Quantity</Label>
          </Col>
          <Col md="7">
            <Input type="number" required />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Discount Type</Label>
          </Col>
          <Col md="7">
            <select className="form-select" required>
              <option value="">--Select--</option>
              <option value="1">Percent</option>
              <option value="2">Fixed</option>
            </select>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Status</Label>
          </Col>
          <Col md="7">
            <Label className="d-block">
              <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />
              Enable the Coupon
            </Label>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default GeneralFormBottom;

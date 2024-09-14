import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const ProductPermissions = () => {
  return (
    <div className="attribute-blocks">
      <h5 className="f-w-600 mb-3">Product Related Permission </h5>
      <Row>
        <Col xl="3" sm="4">
          <Label className="form-label">Add Product</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
              Allow
            </Label>
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xl="3" sm="4">
          <Label className="form-label">Update Product</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" defaultChecked />
              Allow
            </Label>
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xl="3" sm="4">
          <Label className="form-label">Delete Product</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className=" m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani2" />
              Allow
            </Label>
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani6" type="radio" name="rdo-ani2" defaultChecked />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xl="3" sm="4">
          <Label className="mb-0 sm-label-radio">Apply Discount</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated pb-0">
            <Label className="d-block mb-0">
              <Input className="radio_animated" id="edo-ani7" type="radio" name="rdo-ani3" />
              Allow
            </Label>
            <Label className="d-block mb-0">
              <Input className="radio_animated" id="edo-ani8" type="radio" name="rdo-ani3" defaultChecked />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPermissions;

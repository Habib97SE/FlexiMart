import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const CategoryPermissions = () => {
  return (
    <div className="attribute-blocks">
      <h5 className="f-w-600 mb-3">Category Related Permission </h5>
      <Row>
        <Col xl="3" sm="4">
          <Label className="form-label">Add Category</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani9" type="radio" name="rdo-ani4" />
              Allow
            </Label>
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani10" type="radio" name="rdo-ani4" defaultChecked />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xl="3" sm="4">
          <Label className="form-label">Update Category</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani11" type="radio" name="rdo-ani5" />
              Allow
            </Label>
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani12" type="radio" name="rdo-ani5" defaultChecked />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xl="3" sm="4">
          <Label className="form-label">Delete Category</Label>
        </Col>
        <Col xl="9" sm="8">
          <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani13" type="radio" name="rdo-ani6" />
              Allow
            </Label>
            <Label className="d-block">
              <Input className="radio_animated" id="edo-ani14" type="radio" name="rdo-ani6" defaultChecked />
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
          <FormGroup className="m-checkbox-inline custom-radio-ml d-flex radio-animated pb-0">
            <Label className="d-block mb-0">
              <Input className="radio_animated" id="edo-ani15" type="radio" name="rdo-ani7" />
              Allow
            </Label>
            <Label className="d-block mb-0">
              <Input className="radio_animated" id="edo-ani16" type="radio" name="rdo-ani7" defaultChecked />
              Deny
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryPermissions;

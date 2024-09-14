import { Button, Col, Input, Label, Row } from "reactstrap";

const DeactivateAccount = () => {
  return (
    <div className="account-setting deactivate-account">
      <h5 className="f-w-600 f-16">Deactivate Account</h5>
      <Row>
        <Col>
          <Label className="d-block form-label">
            <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />I have a privacy concern
          </Label>
          <Label className="d-block form-label">
            <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
            This is temporary
          </Label>
          <Label className="d-block mb-0">
            <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
            Other
          </Label>
        </Col>
      </Row>
      <Button type="button" color="primary">
        Deactivate Account
      </Button>
    </div>
  );
};

export default DeactivateAccount;

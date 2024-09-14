import { Button, Col, Input, Label, Row } from "reactstrap";

const DeleteAccount = () => {
  return (
    <div className="account-setting deactivate-account">
      <h5 className="f-w-600 f-16">Delete Account</h5>
      <Row>
        <Col>
          <Label className="d-block form-label">
            <Input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" defaultChecked />
            No longer usable
          </Label>
          <Label className="d-block form-label">
            <Input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" />
            Want to switch on other account
          </Label>
          <Label className="d-block mb-0">
            <Input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani1" defaultChecked />
            Other
          </Label>
        </Col>
      </Row>
      <Button type="button" color="primary">
        Delete Account
      </Button>
    </div>
  );
};

export default DeleteAccount;

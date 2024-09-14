import { Col, Input, Label, Row } from "reactstrap";

const Notifications = () => {
  return (
    <div className="account-setting">
      <h5 className="f-w-600 f-16">Notifications</h5>
      <Row>
        <Col>
          <Label className="d-block form-label">
            <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />
            Allow Desktop Notifications
          </Label>
          <Label className="d-block form-label">
            <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
            Enable Notifications
          </Label>
          <Label className="d-block form-label">
            <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />
            Get notification for my own activity
          </Label>
          <Label className="d-block mb-0">
            <Input className="checkbox_animated" id="chk-ani3" type="checkbox" defaultChecked />
            DND
          </Label>
        </Col>
      </Row>
    </div>
  );
};

export default Notifications;

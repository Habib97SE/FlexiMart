import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const GeneralForm = () => {
  const [value, setValue] = useState<string | undefined>("");
  const onChange = (e: string | undefined) => {
    setValue(e);
  };
  return (
    <Form className="needs-validation">
      <h4>General</h4>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>* Name</Label>
          </Col>
          <Col xl="8" md="7" className=" p-0">
            <Input id="validationCustom0" type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className=" editor-label">
        <Row>
          <Col xl="3" md="4">
            <Label>
              <span>*</span> Description
            </Label>
          </Col>
          <Col xl="8" md="7" className="editor-space p-0">
            <MDEditor value={value} onChange={onChange} />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Status</Label>
          </Col>
          <Col xl="8" md="7" className=" px-1">
            <Label className="d-block">
              <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
              Enable the Coupon
            </Label>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default GeneralForm;

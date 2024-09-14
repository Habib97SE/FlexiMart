import MDEditor from "@uiw/react-md-editor";
import { SetStateAction, useState } from "react";
import { Col, Form, FormGroup, Label, Row } from "reactstrap";

const ProductSizeAndDescription = () => {
  const [value, setValue] = useState<string | undefined>("");

  const onChange = (e: SetStateAction<string | undefined>) => {
    setValue(e);
  };
  return (
    <Form>
      <FormGroup className=" mb-3">
        <Row>
          <Col xl="3" sm="4">
            <Label className="fw-bold mb-0">Select Size :</Label>
          </Col>
          <Col xl="8" sm="7">
            <select className="form-control digits" id="exampleFormControlSelect1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className=" mb-3 ">
        <Row>
          <Col xl="3" sm="4">
            <Label className="fw-bold">Add Description :</Label>
          </Col>
          <Col xl="8" sm="7" className=" description-sm">
            <MDEditor value={value} onChange={onChange} />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default ProductSizeAndDescription;

import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ProductCodeAndPrice = () => {
  return (
    <Form className=" form-label-center">
      <FormGroup className=" mb-3">
        <Row>
          <Col xl="3" sm="4">
            <Label className="fw-bold mb-0">Product Name :</Label>
          </Col>
          <Col xl="8" sm="7">
            <Input name="product_name" id="validationCustom01" type="text" required />
          </Col>
        </Row>
        <div className="valid-feedback">Looks good!</div>
      </FormGroup>

      <FormGroup className="mb-3 ">
        <Row>
          <Col xl="3" sm="4">
            <Label className="fw-bold mb-0">Price :</Label>
          </Col>
          <Col sm="7" xl="8">
            <Input className="mb-0" name="price" id="validationCustom02" type="number" required />
          </Col>
          <div className="valid-feedback">Looks good!</div>
        </Row>
      </FormGroup>

      <FormGroup className=" mb-3">
        <Row>
          <Col xl="3" sm="4">
            <Label className="fw-bold mb-0">Product Code :</Label>
          </Col>
          <Col sm="7" xl="8">
            <Input name="product_code" id="validationCustomUsername" type="number" required />
          </Col>
          <div className="invalid-feedback offset-sm-4 offset-xl-3">Please choose Valid Code.</div>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default ProductCodeAndPrice;

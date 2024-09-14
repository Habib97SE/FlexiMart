import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const SEOForm = () => {
  return (
    <Form className="needs-validation">
      <h4>SEO</h4>
      <FormGroup>
        <Row>
          <Col xl="3" md="4">
            <Label>Meta Title</Label>
          </Col>
          <Col xl="8" md="7" className=" p-0">
            <Input id="validationCustom2" type="text" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="editor-label">
        <Row>
          <Col xl="3" md="4">
            <Label>Meta Description</Label>
          </Col>
          <Col xl="8" md="7" className="p-0">
            <textarea rows={4} className="w-100"></textarea>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default SEOForm;

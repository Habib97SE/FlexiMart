import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { DigitalCategoryData } from "@/Data/Product/Digital";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const CategoryDigital = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <CommonBreadcrumb title="Category" parent="Digital" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="FDigital Category" />
              <CardBody>
                <div className="btn-popup pull-right">
                  <Button color="secondary" onClick={onOpenModal}>
                    Add Category
                  </Button>
                  <Modal isOpen={open} toggle={onCloseModal}>
                    <ModalHeader toggle={onCloseModal}>
                      <h5 className="modal-title f-w-600" id="exampleModalLabel2">
                        Add Digital Product
                      </h5>
                    </ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup>
                          <Label htmlFor="recipient-name" className="col-form-label">
                            Name :
                          </Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="message-text" className="col-form-label">
                            Category Image :
                          </Label>
                          <Input id="validationCustom02" type="file" />
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={onCloseModal}>
                        Save
                      </Button>
                      <Button color="secondary" onClick={onCloseModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
                <div className="clearfix"></div>
                <div id="basicScenario" className="product-physical">
                  <Datatable multiSelectOption={false} myData={DigitalCategoryData} pageSize={5} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CategoryDigital;

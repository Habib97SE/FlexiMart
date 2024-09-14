import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { DigitalSubCategoryData } from "@/Data/Product/Digital";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const SubCategoryDigital = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <CommonBreadcrumb title="Sub Category" parent="Digital" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Digital sub Category" />
              <CardBody>
                <div className="btn-popup pull-right">
                  <Button color="secondary" onClick={onOpenModal}>
                    Add Sub Category
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
                            Sub Category Name :
                          </Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="message-text" className="col-form-label">
                            Sub Category Image :
                          </Label>
                          <Input id="validationCustom02" type="file" />
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button type="button" color="primary" onClick={onCloseModal}>
                        Save
                      </Button>
                      <Button type="button" color="secondary" onClick={onCloseModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
                <div className="clearfix"></div>
                <div id="basicScenario" className="product-physical">
                  <Datatable multiSelectOption={false} myData={DigitalSubCategoryData} pageSize={6} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SubCategoryDigital;

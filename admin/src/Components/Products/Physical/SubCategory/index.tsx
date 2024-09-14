import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { ProductCategoryData } from "@/Data/Product/Physical";
import { Fragment, useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const SubCategory = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <CommonBreadcrumb title="Sub Category" parent="Physical" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Product Sub Category" />
              <CardBody>
                <ButtonGroup className=" pull-right">
                  <Button color="primary" onClick={onOpenModal}>
                    Add Sub Category
                  </Button>
                  <Modal isOpen={open} toggle={onCloseModal}>
                    <ModalHeader toggle={onCloseModal}>
                      <h5 className="modal-title f-w-600" id="exampleModalLabel2">
                        Add Physical Product
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
                      <Button color="primary" onClick={onCloseModal}>
                        Save
                      </Button>
                      <Button color="secondary" onClick={onCloseModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ButtonGroup>
                <div className="clearfix"></div>
                <div id="basicScenario" className="product-physical">
                  <Datatable myData={ProductCategoryData} multiSelectOption={false} pageSize={10} pagination={true} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SubCategory;

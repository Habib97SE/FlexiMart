import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { InvoiceData } from "@/Data/Invoice";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Invoice = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Invoice" parent="Invoice" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Invoice List" />
              <CardBody>
                <div id="basicScenario" className="product-list">
                  <Datatable multiSelectOption={false} myData={InvoiceData} pageSize={10} pagination={true} className="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Invoice;

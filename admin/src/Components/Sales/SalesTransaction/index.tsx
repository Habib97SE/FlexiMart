import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { SalesTransactionData } from "@/Data/Sales";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const SalesTransaction = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Transactions" parent="Sales" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Transaction Details" />
              <CardBody>
                <div id="batchDelete" className="transactions">
                  <Datatable multiSelectOption={false} myData={SalesTransactionData} pageSize={10} pagination={true} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SalesTransaction;

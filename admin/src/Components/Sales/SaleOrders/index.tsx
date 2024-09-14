import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { SaleOrdersData } from "@/Data/Sales";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const SalesOrders = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Orders" parent="Sales" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Manage Order" />
              <CardBody className="order-datatable">
                <Datatable multiSelectOption={false} myData={SaleOrdersData} pageSize={10} pagination={true} class="-striped -highlight" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SalesOrders;

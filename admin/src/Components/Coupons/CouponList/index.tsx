import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { CouponsListData } from "@/Data/Coupons";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const ListCoupons = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="List Coupons" parent="Coupons" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Product Category" />
              <CardBody>
                <div id="batchDelete" className="category-table order-table coupon-list-delete">
                  <Datatable multiSelectOption={true} myData={CouponsListData} pageSize={10} pagination={true} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ListCoupons;

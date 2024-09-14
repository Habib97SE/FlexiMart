import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import Datatable from "@/CommonComponents/DataTable";
import { MenuListData } from "@/Data/Menu";
import { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const MenuList = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="List Menu" parent="Menu" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Menu Lists</h5>
              </CardHeader>
              <CardBody>
                <div id="batchDelete" className="category-table order-table coupon-list-delete">
                  <Datatable multiSelectOption={true} myData={MenuListData} pageSize={6} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MenuList;

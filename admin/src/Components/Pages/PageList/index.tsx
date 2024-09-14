import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { ListData } from "@/Data/Lists";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const ListPages = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="List Pages" parent="Pages" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="" />
              <CardBody>
                <div id="batchDelete" className="category-table order-table coupon-list-delete">
                  <Datatable multiSelectOption={true} myData={ListData} pageSize={7} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ListPages;

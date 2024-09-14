import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { ProductListDigitalData } from "@/Data/Product/Digital";
import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const ProductListDigital = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Product List" parent="Digital" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Product Lists" />
              <CardBody>
                <div className="clearfix"></div>
                <div id="basicScenario" className="product-physical products-list">
                  <Datatable multiSelectOption={false} myData={ProductListDigitalData} pageSize={9} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductListDigital;

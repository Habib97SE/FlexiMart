import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import Datatable from "@/CommonComponents/DataTable";
import { TaxesData } from "@/Data/Localization";
import { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Taxes = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Taxes" parent="Localization" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Tax Details</h5>
              </CardHeader>
              <CardBody>
                <div id="basicScenario" className="product-list translation-list">
                  <Datatable multiSelectOption={false} myData={TaxesData} pageSize={6} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Taxes;

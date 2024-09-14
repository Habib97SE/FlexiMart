import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import Datatable from "@/CommonComponents/DataTable";
import { CurrencyRatesData } from "@/Data/Localization";
import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const CurrencyRates = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title=" Currency Rates" parent="Localization" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Currency Details</h5>
              </CardHeader>
              <CardBody>
                <div id="basicScenario" className="product-list translation-list">
                  <Datatable multiSelectOption={false} myData={CurrencyRatesData} pageSize={6} pagination={false} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CurrencyRates


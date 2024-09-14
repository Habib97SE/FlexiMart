import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import Datatable from "@/CommonComponents/DataTable";
import { TranslationData } from "@/Data/Localization";
import { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Translations = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Translations" parent="Localization" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Translations</h5>
              </CardHeader>
              <CardBody>
                <div id="basicScenario" className="product-list translation-list">
                  <Datatable multiSelectOption={false} myData={TranslationData} pageSize={10} pagination={true} class="-striped -highlight" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Translations;

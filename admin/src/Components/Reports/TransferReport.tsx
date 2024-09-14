import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import Datatable from "@/CommonComponents/DataTable";
import { ReportsData } from "@/Data/Report";
import { Card, CardBody, Col } from "reactstrap";

const TransferReport = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title="Transfer Report" />
        <CardBody>
          <div id="basicScenario" className="report-table">
            <div className="translation-list">
              <Datatable multiSelectOption={false} myData={ReportsData} pageSize={12} pagination={false} class="-striped -highlight" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TransferReport;

import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ReportPurchaseReturnData, ReportPurchaseReturnOptions } from "@/Data/Report";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const SalesReturn = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title="Sales/Purchase Return" />
        <CardBody>
          <div className="report-last-sm">
            <Line options={ReportPurchaseReturnOptions} data={ReportPurchaseReturnData} width={300} height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesReturn;

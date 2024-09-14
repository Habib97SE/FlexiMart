import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ReportPurchaseChartData, ReportPurchaseChartOptions } from "@/Data/Report";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";


const SalesAndPurchase = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title="Sales/Purchase" />
        <CardBody>
          <div className="sales-chart">
            <Bar options={ReportPurchaseChartOptions} data={ReportPurchaseChartData} height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesAndPurchase;

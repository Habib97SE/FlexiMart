import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SalesSummaryData, SalesSummaryOptions } from "@/Data/Report";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const SalesSummary = () => {
  return (
    <Col xl="8" md="6">
      <Card>
        <CommonCardHeader title="Sales Summary" />
        <CardBody className="sell-graph">
          <Line options={SalesSummaryOptions} data={SalesSummaryData}  width={200} height={350} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesSummary;

import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BuySellChartData, BuySellChartOptions } from "@/Data/Dashboard";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const BuySell = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title="Buy/Sell" />
        <CardBody className="sell-graph">
          <Line data={BuySellChartData} options={BuySellChartOptions} width={700} height={350} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BuySell;

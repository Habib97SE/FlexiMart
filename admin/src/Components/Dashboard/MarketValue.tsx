import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MarketValueChartData, MarketValueChartOptions } from "@/Data/Dashboard";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const MarketValue = () => {
  return (
    <Col xl="6 xl-100">
      <Card>
        <CommonCardHeader title="Market Value" />
        <CardBody>
          <div className="market-chart">
            <Bar data={MarketValueChartData} options={MarketValueChartOptions} width={778} height={308} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarketValue;

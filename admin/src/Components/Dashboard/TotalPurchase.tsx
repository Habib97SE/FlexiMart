import { TotalPurchaseData, TotalPurchaseOptions } from "@/Data/Dashboard";
import { CreditCard } from "react-feather";
import Chart from "react-google-charts";
import { Card, CardBody, CardHeader, Col, Media, Row } from "reactstrap";

const TotalPurchase = () => {
  return (
    <Col xl="3 xl-50" md="6">
      <Card className=" order-graph sales-carousel">
        <CardHeader>
          <h6>Total purchase</h6>
          <Row>
            <Col xs="6">
              <div className="small-chartjs">
                <div className="flot-chart-placeholder" id="simple-line-chart-sparkline">
                  <Chart height={"60px"} chartType="LineChart" loader={<div>Loading Chart</div>} data={TotalPurchaseData} options={TotalPurchaseOptions} legend_toggle />
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="value-graph">
                <h3>
                  20%
                  <span>
                    <i className="fa fa-angle-up font-secondary"></i>
                  </span>
                </h3>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Media>
            <Media body>
              <span>Monthly Purchase</span>
              <h2 className="mb-0">2154</h2>
              <p>
                0.13%
                <span>
                  <i className="fa fa-angle-up"></i>
                </span>
              </p>
              <h5 className="f-w-600 f-16">Avg Gross purchase</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </Media>
            <div className="bg-secondary b-r-8">
              <div className="small-box">
                <CreditCard />
              </div>
            </div>
          </Media>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalPurchase;

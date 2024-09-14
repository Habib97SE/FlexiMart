import { TotalCashData, TotalCashOptions } from "@/Data/Dashboard";
import { ShoppingCart } from "react-feather";
import Chart from "react-google-charts";
import { Card, CardBody, CardHeader, Col, Media, Row } from "reactstrap";

const TotalCash = () => {
  return (
    <Col xl="3 xl-50" md="6">
      <Card className="order-graph sales-carousel">
        <CardHeader>
          <h6>Total cash transaction</h6>
          <Row>
            <Col xs="6">
              <div className="small-chartjs">
                <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-2">
                  <Chart height={"60px"} chartType="LineChart" loader={<div>Loading Chart</div>} data={TotalCashData} options={TotalCashOptions} legend_toggle />
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="value-graph">
                <h3>
                  28%
                  <span>
                    <i className="fa fa-angle-up font-warning"></i>
                  </span>
                </h3>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Media>
            <Media body>
              <span>Cash on hand</span>
              <h2 className="mb-0">4672</h2>
              <p>
                0.8%
                <span>
                  <i className="fa fa-angle-up"></i>
                </span>
              </p>
              <h5 className="f-w-600 f-16">Details about cash</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </Media>
            <div className="bg-warning b-r-8">
              <div className="small-box">
                <ShoppingCart />
              </div>
            </div>
          </Media>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalCash;

import { DailyDepositOptions, DailyDepositsData } from "@/Data/Dashboard";
import { Calendar } from "react-feather";
import Chart from "react-google-charts";
import { Card, CardBody, CardHeader, Col, Media, Row } from "reactstrap";

const DailyDeposits = () => {
  return (
    <Col xl="3 xl-50" md="6">
      <Card className="order-graph sales-carousel">
        <CardHeader>
          <h6>Daily Deposits</h6>
          <Row>
            <Col className="col-6">
              <div className="small-chartjs">
                <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-1">
                  <Chart height={"60px"} chartType="LineChart" loader={<div>Loading Chart</div>} data={DailyDepositsData} options={DailyDepositOptions} legend_toggle />
                </div>
              </div>
            </Col>
            <Col className="col-6">
              <div className="value-graph">
                <h3>
                  75%{" "}
                  <span>
                    <i className="fa fa-angle-up font-danger"></i>
                  </span>
                </h3>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Media>
            <Media body>
              <span>Security Deposits</span>
              <h2 className="mb-0">5782</h2>
              <p>
                0.25%
                <span>
                  <i className="fa fa-angle-up"></i>
                </span>
              </p>
              <h5 className="f-w-600 f-16">Gross sales of June</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </Media>
            <div className="bg-danger b-r-8">
              <div className="small-box">
                <Calendar />
              </div>
            </div>
          </Media>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DailyDeposits;

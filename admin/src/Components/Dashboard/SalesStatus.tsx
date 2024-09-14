import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EmployeeChartData, EmployeeChartOptions, SalesByLocationData, SalesByLocationOptions, SalesStatusCountry, SalesStatusCountry2, SalesStatusDonutChart, SalesStatusDonutChartData } from "@/Data/Dashboard";
import { Line } from "react-chartjs-2";
import Chart from "react-google-charts";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

const SalesStatus = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title="Sales Status" />
        <CardBody>
          <Row>
            <Col xl="3 " className="xl-50" sm="6">
              <div className="order-graph">
                <h6>Orders By Location</h6>
                <div className="chart-block chart-vertical-center">
                  <Chart width={"100%"} height={"180px"} chartType="PieChart" loader={<div>Loading Chart</div>} data={SalesStatusDonutChartData} options={SalesStatusDonutChart} legend_toggle />
                </div>
                <div className="order-graph-bottom">
                  {SalesStatusCountry.map((item, i) => (
                    <Media>
                      <div className={`order-color-${item.color}`}></div>
                      <Media body>
                        <h6 className="mb-0">
                          {item.country} <span className="pull-right">${item.amount}</span>
                        </h6>
                      </Media>
                    </Media>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl="3" sm="6" className="xl-50">
              <div className="order-graph sm-order-space">
                <h6>Sales By Location</h6>
                <div className="peity-chart-dashboard text-center">
                  <Chart chartType="PieChart" data={SalesByLocationData} options={SalesByLocationOptions} graph_id="PieChart" width={"100%"} height={"180px"} legend_toggle />
                </div>
                <div className="order-graph-bottom sales-location">
                  {SalesStatusCountry2.map((item, i) => (
                    <Media key={i}>
                      <div className={`order-shape-${item.color}`}></div>
                      <Media body>
                        <h6 className="mb-0 me-0">
                          {item.location} <span className="pull-right">{item.percentage}%</span>
                        </h6>
                      </Media>
                    </Media>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl="6 " className="xl-100">
              <div className="order-graph xl-space">
                <h6>Revenue for last month</h6>
                <div className="ct-4 flot-chart-container">
                  <Line data={EmployeeChartData} options={EmployeeChartOptions} />
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesStatus;

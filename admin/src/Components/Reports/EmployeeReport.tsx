import { EmployeeChartData, EmployeeChartOptions } from "@/Data/Report";
import Chart from "react-apexcharts";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const EmployeeReport = () => {
  return (
    <Col xl="4" md="6">
      <Card className="report-employee">
        <CardHeader>
          <h2>75%</h2>
          <h6 className="mb-0">Employees Satisfied</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="ct-4 flot-chart-container">
            <Line options={EmployeeChartOptions} data={EmployeeChartData} height={380} width={500} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmployeeReport;

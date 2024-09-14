import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ReportExpensesChartData, ReportExpensesChartOptions } from "@/Data/Report";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const ExpensesReport = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title="Expenses" />
        <CardBody className="expense-chart">
          <div className="chart-overflow" id="area-chart1">
            <Line options={ReportExpensesChartOptions} data={ReportExpensesChartData} height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExpensesReport;

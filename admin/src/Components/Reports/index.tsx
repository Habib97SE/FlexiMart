import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import EmployeeReport from "./EmployeeReport";
import ExpensesReport from "./ExpensesReport";
import SalesAndPurchase from "./SalesAndPurchase";
import SalesReturn from "./SalesReturn";
import SalesSummary from "./SalesSummary";
import TransferReport from "./TransferReport";

const Reports = () => {
  return (
    <div>
      <CommonBreadcrumb title="Reports" parent="Reports" />
      <Container fluid>
        <Row>
          <SalesSummary />
          <EmployeeReport />
          <TransferReport />
          <ExpensesReport />
          <SalesAndPurchase />
        </Row>
        <SalesReturn />
      </Container>
    </div>
  );
};

export default Reports;

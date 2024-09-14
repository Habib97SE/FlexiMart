import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Button, Card, CardBody, Col, Table } from "reactstrap";

const LatestOrders = () => {
  return (
    <Col xl="6 xl-100">
      <Card>
        <CommonCardHeader title="Latest Orders" />
        <CardBody>
          <div className="user-status table-responsive latest-order-table">
            <Table borderless>
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Order Total</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="digits">$120.00</td>
                  <td className="font-danger">Bank Transfers</td>
                  <td className="digits">On Way</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="digits">$90.00</td>
                  <td className="font-secondary">Ewallets</td>
                  <td className="digits">Delivered</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="digits">$240.00</td>
                  <td className="font-warning">Cash</td>
                  <td className="digits">Delivered</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="digits">$120.00</td>
                  <td className="font-primary">Direct Deposit</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td className="digits">$50.00</td>
                  <td className="font-primary">Bank Transfers</td>
                  <td className="digits">Delivered</td>
                </tr>
              </tbody>
            </Table>
            <Button color="primary">View All Orders</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestOrders;

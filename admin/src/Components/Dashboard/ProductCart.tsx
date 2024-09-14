import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col, Table } from "reactstrap";

const ProductCart = () => {
  return (
    <Col xl="6 xl-100">
      <Card className="height-equal">
        <CommonCardHeader title="Product Card" />
        <CardBody>
          <div className="user-status table-responsive products-table">
            <Table borderless className="  mb-0">
              <thead>
                <tr>
                  <th scope="col">Details</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Status</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Simply dummy text of the printing</td>
                  <td className="digits">1</td>
                  <td className="font-primary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Long established</td>
                  <td className="digits">5</td>
                  <td className="font-secondary">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>sometimes by accident</td>
                  <td className="digits">10</td>
                  <td className="font-secondary">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>classical Latin literature</td>
                  <td className="digits">9</td>
                  <td className="font-primary">Return</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>keep the site on the Internet</td>
                  <td className="digits">8</td>
                  <td className="font-primary">Pending</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Molestiae consequatur</td>
                  <td className="digits">3</td>
                  <td className="font-secondary">Cancle</td>
                  <td className="digits">$6523</td>
                </tr>
                <tr>
                  <td>Pain can procure</td>
                  <td className="digits">8</td>
                  <td className="font-primary">Return</td>
                  <td className="digits">$6523</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCart;

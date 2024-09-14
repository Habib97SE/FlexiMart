import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Card, CardBody, Container, Row } from "reactstrap";
import ProductDetailSlider from "./ProductDetailSlider";
import ProductInformation from "./ProductInformation";

const ProductDetail = () => {
  return (
    <>
      <CommonBreadcrumb title="Product Detail" parent="Physical" />
      <Container fluid>
        <Card>
          <CardBody>
            <Row className="product-page-main">
              <ProductDetailSlider />
              <ProductInformation />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetail;

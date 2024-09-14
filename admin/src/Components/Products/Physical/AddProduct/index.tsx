import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Fragment } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import ProductCodePrice from "./ProductCodeAndPrice";
import ProductImages from "./ProductImages";
import ProductSizeAndDescription from "./ProductSizeAndDescription";
import TotalProducts from "./TotalProducts";

const AddProduct = () => {
  const handleValidSubmit = () => {};
  return (
    <Fragment>
      <CommonBreadcrumb title="Add Product" parent="Physical" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title="Add Product" />
              <CardBody>
                <Row className="product-adding">
                  <ProductImages />
                  <Col xl="7">
                    <div className="needs-validation add-product-form" onSubmit={handleValidSubmit}>
                      <ProductCodePrice />
                      <TotalProducts />
                      <ProductSizeAndDescription />
                      <div className="offset-xl-3 offset-sm-4">
                        <Button type="submit" color="primary">
                          Add
                        </Button>
                        <Button color="light">Discard</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProduct;

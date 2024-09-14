import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Href, ImagePath } from "@/Constants";
import { ColorVariant, ProductListData, ProductRating } from "@/Data/Product/Physical";
import { Fragment } from "react";
import { Edit, Trash2 } from "react-feather";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

const ProductList = () => {
  return (
    <Fragment>
      <CommonBreadcrumb title="Product List" parent="Physical" />
      <Container fluid>
        <Row className="products-admin ratio_asos">
          {ProductListData.map((item, i) => {
            return (
              <Col xl="3" sm="6" key={i}>
                <Card>
                  <div className="products-admin">
                    <CardBody className="product-box">
                      <div className="img-wrapper">
                        <div className="lable-block">
                          {item.tag === "new" ? <span className="lable3">{item.tag}</span> : ""}
                          {item.discount === "on sale" ? <span className="lable4">{item.discount}</span> : ""}
                        </div>
                        <div className="front">
                          <a href={Href} className="bg-size">
                            <img alt="" className="img-fluid blur-up bg-img lazyloaded" src={`${ImagePath}${item.image}`} />
                          </a>
                          <div className="product-hover">
                            <ul>
                              <li>
                                <Button color="transparent">
                                  <Edit className="editBtn" />
                                </Button>
                              </li>
                              <li>
                                <Button color="transparent">
                                  <Trash2 className="deleteBtn" />
                                </Button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="product-detail">
                        {ProductRating}
                        <a href={Href}>
                          <h6>{item.title}</h6>
                        </a>
                        <h4>
                          {item.price} <del>{item.discount_price}</del>
                        </h4>
                        {ColorVariant}
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductList;

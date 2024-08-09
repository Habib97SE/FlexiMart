import React, { useEffect, useState, useRef } from "react";
import ProductTab from "../common/product-tab";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "../common/detail-price";

import { Row, Col, Container, Media } from "reactstrap";

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        alt
        src
      }
    }
  }
`;

const NoSidebarPage = ({ pathId }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });
  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };


  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [data]);

  const { nav1, nav2 } = state;

  return (
    <section className="">
      <div className="collection-wrapper">
        <Container>
          <Row>
            <Col sm="12" xs="12">
              <div className="container-fluid">
                {!data ||
                !data.product ||
                data.product.length === 0 ||
                loading ? (
                  "loading"
                ) : (
                  <Row>
                    <Col lg="6" className="product-thumbnail">
                      <Slider
                        {...products}
                        asNavFor={nav2}
                        ref={(slider) => (slider1.current = slider)}
                        className="product-slick"
                      >
                        {data.product.images.map((vari, index) => (
                          <div key={index}>
                            <ImageZoom image={vari} />
                          </div>
                        ))}
                      </Slider>
                      <Slider
                        className="slider-nav"
                        {...productsnav}
                        asNavFor={nav1}
                        ref={(slider) => (slider2.current = slider)}
                      >
                        {data.product.variants
                          ? data.product.images.map((vari, index) => (
                              <div key={index}>
                                <Media
                                  src={`${vari.src}`}
                                  key={index}
                                  alt={vari.alt}
                                  className="img-fluid"
                                />
                              </div>
                            ))
                          : ""}
                      </Slider>
                    </Col>
                    <Col lg="6" className="rtl-text">
                      <DetailsWithPrice
                        changeColorVar={changeColorVar}
                        item={data.product}
                      />
                    </Col>
                  </Row>
                )}
              </div>
              <ProductTab />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default NoSidebarPage;

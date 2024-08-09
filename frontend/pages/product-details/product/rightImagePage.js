import React, { useContext, useState, useRef, useEffect } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import DetailsWithPrice from "../common/detail-price";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ImageZoom from "../common/image-zoom";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";

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
        color
        image_id
        variant_id
        size
      }
      images {
        image_id
        src
      }
    }
  }
`;

const RightImagePage = () => {
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
    vertical: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          vertical: false,
        },
      },
    ],
  };

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [data]);

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  const { nav1, nav2 } = state;
  return (
    <section>
      <div className="collection-wrapper">
        <Container>
          {!data || !data.product || data.product.length === 0 || loading ? (
            "loading"
          ) : (
            <Row className="rightImage">
              <Col lg="5" sm="10" xs="12">
                <Slider
                  {...products}
                  asNavFor={nav2}
                  ref={(slider) => (slider1.current = slider)}
                  className="product-right-slick"
                >
                  {data.product.images.map((vari, index) => (
                    <div key={index}>
                      <ImageZoom image={vari} />
                    </div>
                  ))}
                </Slider>
              </Col>
              <Col lg="1" sm="2" xs="12" className="order-down">
                <Row>
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
                </Row>
              </Col>
              <Col lg="6" className="rtl-text">
                <DetailsWithPrice
                  changeColorVar={changeColorVar}
                  item={data.product}
                />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
};

export default RightImagePage;

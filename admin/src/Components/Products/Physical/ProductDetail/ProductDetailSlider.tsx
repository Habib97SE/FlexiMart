//@ts-nocheck
import { ImagePath } from "@/Constants";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col } from "reactstrap";

const ProductDetailSlider = () => {
  const [nav, setNav] = useState({
    nav1: null,
    nav2: null,
  });
  useEffect(() => {
    setNav({
      nav1: Slider.slider1,
      nav2: Slider.slider2,
    });
  }, []);
  return (
    <Col xl="4">
      <Slider asNavFor={nav.nav2} ref={(slider) => (Slider.slider1 = slider)} className="product-slider no-arrow">
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/1.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/27.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/2.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/1.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/27.jpg`} alt="" />
        </div>
      </Slider>
      <Slider asNavFor={nav.nav1} ref={(slider) => (Slider.slider2 = slider)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} className="small-slick">
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/1.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/27.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/2.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/27.jpg`} alt="" />
        </div>
        <div className="item">
          <img className="img-fluid" src={`${ImagePath}/pro3/1.jpg`} alt="" />
        </div>
      </Slider>
    </Col>
  );
};

export default ProductDetailSlider;

import Image from "next/image";
import Slider from "react-slick";
import { Card, Col } from "reactstrap";
import stats from "../../../public/assets/images/dashboard/stats.png";

const LoginSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
  };
  return (
    <Col md="5" className="p-0 card-left">
      <Card className="bg-primary">
        <div className="svg-icon">
          <Image height={78} width={78} alt="" src={stats} className="Img-fluid" />
        </div>
        <Slider className="single-item" {...settings}>
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div>
                <h3>Welcome to Multikart</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
              </div>
            </div>
          ))}
        </Slider>
      </Card>
    </Col>
  );
};

export default LoginSlider;

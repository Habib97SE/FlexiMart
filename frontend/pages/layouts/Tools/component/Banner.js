import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Media } from "reactstrap";
import tool3 from "../../../../public/assets/images/tools/3.png";
import tool4 from "../../../../public/assets/images/tools/4.png";
import tool1 from "../../../../public/assets/images/tools/1.png";

const Banner = () => {
  return (
    <Fragment>
      <section id="tool-bg" className="p-0 height-85 tools_slider">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home text-center home49">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>Welcome to tools</h4>
                        <h1>Auto Parts</h1>
                        <a href="!#" className="btn btn-solid">
                          shop now
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="tools-parts" id="tool-1">
                  <Media src={tool3.src} className="img-fluid" alt="" />
                </div>
                <div className="tools-parts1" id="tool-2">
                  <Media src={tool4.src} className="img-fluid" alt="" />
                </div>
              </Container>
            </div>
          </div>
          <div>
            <div className="home text-center tools-bg0 home50">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>Welcom to tools</h4>
                        <h1>Auto parts</h1>
                        <a
                          href="!#"
                          className="btn btn-solid"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="tools-parts" id="tool-3">
                  <Media src={tool1.src} className="img-fluid" alt="" />
                </div>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;

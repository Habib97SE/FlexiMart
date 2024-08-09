import React from "react";
import { Container, Media, Row, Col } from "reactstrap";

const Data = [
  { img: '/assets/images/electronics/5.jpg', item: "speaker", offer: "10% off" },
  { img: '/assets/images/electronics/6.jpg', item: "earplug", offer: "10% off" },
  { img: '/assets/images/electronics/7.jpg', item: "best deal", offer: "50% off" },
];

const Banner = ({ img, item, offer }) => {
  return (
    <Col md="4">
      <a href="#">
        <div className="collection-banner p-right text-end">
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <div className="contain-banner banner-3">
            <div>
              <h4>{offer}</h4>
              <h2>{item}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const Collection = () => {
  return (
    <section className="banner-padding banner-goggles ratio2_1">
      <Container>
        <Row className="partition3">
          {Data.map((data, i) => {
            return (
              <Banner
                key={i}
                img={data.img}
                item={data.item}
                offer={data.offer}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Collection;

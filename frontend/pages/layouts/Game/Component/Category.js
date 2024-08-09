import React, { Fragment } from "react";
import { Media, Container, Col, Row } from "reactstrap";

const Data = [
  {
    img: '/assets/images/game/banner/1.jpg',
    about: "for windows",
    offer: "save 10%",
    link: "#",
    class: " p-left text-start",
  },
  {
    img: '/assets/images/game/banner/2.jpg',
    about: "for psp",
    offer: "save 10%",
    link: "#",
    class: " p-right text-end",
  },
];

const MasterCategoryBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="6">
      <a href={link}>
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid bg-img blur-up lazyload"
              alt=""
            />
          </div>
          <div className="contain-banner">
            <div>
              <h4>{about}</h4>
              <h2>{offer}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
const Category = () => {
  return (
    <Fragment>
      <section className="pb-0 banner-text-white ratio_45">
        <Container>
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCategoryBanner
                  key={i}
                  img={data.img}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;

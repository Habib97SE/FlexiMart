import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";

const Data = [
  {
    img: '/assets/images/pets/banner/1.jpg',
    title: "clothes",
    link: "#",
    classes: "p-left",
  },
  {
    img: '/assets/images/pets/banner/2.jpg',
    title: "groom",
    link: "#",
    classes: "p-right text-end",
  },
  {
    img: '/assets/images/pets/banner/3.jpg',
    title: "food",
    link: "#",
    classes: "p-left",
  },
  {
    img: '/assets/images/pets/banner/4.jpg',
    title: "home",
    link: "#",
    classes: "p-right ",
  },
  {
    img: '/assets/images/pets/banner/5.jpg',
    title: "cats",
    link: "#",
    classes: "p-right text-end",
  },
  {
    img: '/assets/images/pets/banner/6.jpg',
    title: "bowls",
    link: "#",
    classes: "p-right",
  },
];

const MasterBannerSection = ({ img, title, link, classes }) => {
  return (
    <Col md="4">
      <a href={link}>
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <div className="contain-banner banner-3">
            <div>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const BannerSection = () => {
  return (
    <Fragment>
      <section className="pt-0 banner-6 ratio2_1">
        <Container>
          <Row className="partition3">
            {Data.map((data, i) => {
              return (
                <MasterBannerSection
                  key={i}
                  img={data.img}
                  link={data.link}
                  title={data.title}
                  classes={data.classes}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BannerSection;

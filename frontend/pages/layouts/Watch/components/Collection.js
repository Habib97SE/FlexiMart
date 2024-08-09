import React, { Fragment } from "react";
import { Container, Col, Row, Media } from "reactstrap";

const Data = [
  {
    img: '/assets/images/banner1.jpg',
    title: "minimum 10% off",
    desc: "new watch",
    link: "#",
    classes: " p-left",
  },
  {
    img: '/assets/images/banner2.jpg',
    title: "",
    desc: "",
    link: "#",
    classes: "p-left text-center",
  },
  {
    img: '/assets/images/banner.jpg',
    title: "minimum 50% off",
    desc: "gold watch",
    link: "#",
    classes: "p-left ",
  },
];

const MasterCollection = ({ img, title, desc, link, classes }) => {
  return (
    <Col md="4">
      <a href="#">
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
              <h4>{title}</h4>
              <h2>{desc}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const Collection = () => {
  return (
    <Fragment>
      <section className="ratio_45">
        <Container>
          <Row className="partition3">
            {Data.map((data, i) => {
              return (
                <MasterCollection
                  key={i}
                  img={data.img}
                  link={data.link}
                  title={data.title}
                  desc={data.desc}
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

export default Collection;

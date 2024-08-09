import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Collapse, Container, Row } from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";

const MasterFooterThree = ({ layoutClass, footerSectionLayout, logoName, footerClass, footerSection, newsLetterSection, btnGreen, myAccount, formClass }) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth <= 767;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth <= 767) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener("resize", changeCollapse);
    };
  }, []);
  return (
    <Fragment>
      <footer className={footerClass}>
        <div className={newsLetterSection}>
          <Container>
            <section className={footerSection}>
              <Row>
                <Col xl="6" className="m-auto">
                  <div className="subscribe">
                    <h4>newsletter</h4>
                    <form className={formClass}>
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter your email" />
                      </div>
                      <button type="submit" className={`btn btn-solid ${btnGreen ? "btn-green" : ""}`}>
                        subscribe
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
        {myAccount ? (
          // <div className="dark-layout">
          //   <Container>
          <section className={`section-b-space ${footerSectionLayout}`}>
            <Container>
              <Row className="footer-theme partition-f">
                <Col lg="4" md="6">
                  <div className={`footer-title ${isOpen && collapse == 1 ? "active" : ""} footer-mobile-title`}>
                    <h4
                      onClick={() => {
                        setCollapse(1);
                        setIsOpen(!isOpen);
                      }}>
                      about
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse isOpen={width ? (collapse === 1 ? isOpen : false) : true}>
                    <div className="footer-contant">
                      <div className="footer-logo">
                        <LogoImage logo={logoName} />
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                      <div className="footer-social">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com" target="_blank">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://plus.google.com" target="_blank">
                              <i className="fa fa-google-plus" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com" target="_blank">
                              <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com" target="_blank">
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://rss.com" target="_blank">
                              <i className="fa fa-rss" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Collapse>
                </Col>
                <Col className="offset-xl-1">
                  <div className="sub-title">
                    <div className={`footer-title ${isOpen && collapse == 2 ? "active" : ""} `}>
                      <h4
                        onClick={() => {
                          if (width) {
                            setIsOpen(!isOpen);
                            setCollapse(2);
                          } else setIsOpen(true);
                        }}>
                        my account
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse isOpen={width ? (collapse === 2 ? isOpen : false) : true}>
                      <div className="footer-contant">
                        <ul>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              {/* <a> */}
                              womens
                              {/* </a> */}
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              {/* <a>  */}
                              clothing
                              {/* </a> */}
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              {/* <a> */}
                              accessories
                              {/* </a> */}
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              {/* <a>  */}
                              featured
                              {/* </a> */}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
                <Col>
                  <div className="sub-title">
                    <div className={`footer-title ${isOpen && collapse == 3 ? "active" : ""} `}>
                      <h4
                        onClick={() => {
                          if (width) {
                            setIsOpen(!isOpen);
                            setCollapse(3);
                          } else setIsOpen(true);
                        }}>
                        why we choose
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse isOpen={width ? (collapse === 3 ? isOpen : false) : true}>
                      <div className="footer-contant">
                        <ul>
                          <li>
                            <a href="#">shipping & return</a>
                          </li>
                          <li>
                            <a href="#">secure shopping</a>
                          </li>
                          <li>
                            <a href="#">gallary</a>
                          </li>
                          <li>
                            <a href="#">affiliates</a>
                          </li>
                          <li>
                            <a href="#">contacts</a>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
                <Col>
                  <div className="sub-title">
                    <div className={`footer-title ${isOpen && collapse == 4 ? "active" : ""} `}>
                      <h4
                        onClick={() => {
                          if (width) {
                            setIsOpen(!isOpen);
                            setCollapse(4);
                          } else setIsOpen(true);
                        }}>
                        store information
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse isOpen={width ? (collapse === 4 ? isOpen : false) : true}>
                      <div className="footer-contant">
                        <ul className="contact-list">
                          <li>
                            <i className="fa fa-map-marker"></i>Multikart Demo Store, Demo store India 345-659
                          </li>
                          <li>
                            <i className="fa fa-phone"></i>Call Us: 123-456-7898
                          </li>
                          <li>
                            <i className="fa fa-envelope-o"></i>Email Us: <a href="#">Support@Fiot.com</a>
                          </li>
                          <li>
                            <i className="fa fa-fax"></i>Fax: 123456
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          //   </Container>
          // </div>
          ""
        )}

        <CopyRight layout={layoutClass ? layoutClass : ""} />
      </footer>
    </Fragment>
  );
};

export default MasterFooterThree;

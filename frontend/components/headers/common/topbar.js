import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const TopBar = ({ topClass }) => {
  return (
    <div id="topHeader" className={`top-header ${topClass ? topClass : ""}`}>
      <Container>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Our store Multikart</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  {"Call Us"}: 123 - 456 - 7890
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
            <ul className="header-dropdown">
              <li className="mobile-wishlist compare-mobile">
                <Link href={`/page/compare`}>
                  <i className="fa fa-random" aria-hidden="true"></i>
                  {"compare"}
                </Link>
              </li>
              <li className="mobile-wishlist">
                <Link href={`/page/account/wishlist`}>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  {"wishlist"}
                </Link>
              </li>
              <li className="onhover-dropdown mobile-account">
                <i className="fa fa-user" aria-hidden="true"></i> {"My account"}
                <ul className="onhover-show-div">
                  <li>
                    <Link href={`/page/account/login`}>Login</Link>
                  </li>
                  <li>
                    <Link href={`/page/account/register`}>Register</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;

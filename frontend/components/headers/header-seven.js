import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from "./common/navbar";
import LogoImage from "./common/logo";
import { Media, Row, Col, Container } from "reactstrap";
import search from "../../public/assets/images/jewellery/icon/search.png";
import heart from "../../public/assets/images/jewellery/icon/heart.png";
import avatar from "../../public/assets/images/jewellery/icon/avatar.png";
import Currency from "./common/currency";
import cart from "../../public/assets/images/jewellery/icon/cart.png";
import settings from "../../public/assets/images/jewellery/icon/controls.png";
import CartContainer from "../containers/CartContainer";
import SearchOverlay from "./common/search-overlay";

const HeaderSeven = ({ logoName }) => {
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
  }, []);

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <>
      <header className="header-5">
        <div className="mobile-fix-option"></div>
        <Container>
          <Row>
            <Col sm="12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="brand-logo">
                    <LogoImage logo={logoName} />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <nav id="main-nav">
                      <NavBar />
                    </nav>
                  </div>
                  <div className="top-header">
                    <ul className="header-dropdown">
                      <li className="mobile-wishlist">
                        <Link href="/page/account/wishlist">
                          {/* <a> */}
                          <Media src={heart.src} alt="" />
                          {/* </a> */}
                        </Link>
                      </li>
                      <li className="onhover-dropdown mobile-account">
                        <Media src={avatar.src} alt="" />
                        <ul className="onhover-show-div">
                          <li>
                            <Link href="/page/account/login" data-lng="en">
                              {/* <a > */}
                              Login
                              {/* </a> */}
                            </Link>
                          </li>
                          <li>
                            <Link href="/" data-lng="en">
                              {/* <a > */}
                              Logout
                              {/* </a> */}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={search.src}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                            <i
                              className="fa fa-search"
                              onClick={openSearch}></i>
                          </div>
                        </li>
                        <Currency icon={settings.src} />
                        <CartContainer icon={cart.src} />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <SearchOverlay />
    </>
  );
};

export default HeaderSeven;

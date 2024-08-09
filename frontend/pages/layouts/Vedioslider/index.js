import React, { Fragment, useEffect, useState } from "react";
import HeaderOne from "../../../components/headers/header-one";
import HomeSlider from "./component/Home-slider";
import Banner from "./component/Banner";
import { Container } from "reactstrap";
import TopCollection from "../../../components/common/Collections/TabCollection10";
// import { withApollo } from "../../../helpers/apollo/apollo";
import FullBanner from "./component/Full-banner";
import ProductSection from "../../../components/common/Collections/Collection11";
import ServiceLayout from "../../../components/common/Service/service3";
import Blog from "../../../components/common/Blog/blog1";
import Instagram from "../../../components/common/instagram/instagram2";
import LogoBlock from "../../../components/common/logo-block";
import ModalComponent from "../../../components/common/Modal";
import Helmet from "react-helmet";
import offer from "../../../public/assets/images/offer.jpg";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Vedioslider = () => {
  const [offerDisplay, setOffer] = useState(false);
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#e38888");
  });
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/10.png"} />
      </Helmet>
      <ModalComponent />
      <HeaderOne
        logoName="logo/17.png"
        headerClass="video-header"
        noTopBar={false}
        topClass="top-header"
      />
      <HomeSlider />
      <Banner />
      <TopCollection type="videoslider" />
      <FullBanner />
      <ProductSection type="videoslider" />
      <Container>
        <ServiceLayout
          layoutClass="service section-b-space  border-section media-mb-0"
          hrLine={true}
        />
      </Container>
      <Blog type="fashion" inner="title-inner4" title="title4" />
      <div className="container">
        <section className="instagram ratio_square">
          <Instagram type="videoSlider" />
        </section>
      </div>
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <MasterFooter
        footerClass={`footer-light footer-classic`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo/17.png"}
      />
      <div className={`offer-box ${offerDisplay ? "toggle-cls" : ""}`}>
        <div className="heading-right" onClick={() => setOffer(!offerDisplay)}>
          <h3>get 10% off</h3>
        </div>
        <div className="offer-body">
          <img src={offer.src} alt="" className="img-fluid" />
        </div>
      </div>
    </Fragment>
  );
};

export default Vedioslider;

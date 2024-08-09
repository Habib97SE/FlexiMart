import React, { Fragment, useEffect } from "react";
import HeaderOne from "../../../components/headers/header-one";
import Banner from "./Components/Banner";
import ServiceLayout from "../../../components/common/Service/service1";
import CollectionBanner from "./Components/CollectionBanner";
import SpecialProducts from "../../../components/common/Collections/Collection1";
import TopCollection from "../../../components/common/Collections/TabCollection1";
import Instagram from "../../../components/common/instagram/instagram2";
import { Product4 } from "../../../services/script";
import Paragraph from "../../../components/common/Paragraph";
import ModalComponent from "../../../components/common/Modal";
import Helmet from "react-helmet";
import MasterParallaxBanner from "../Fashion/Components/MasterParallaxBanner";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Goggles = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#dc457e");
  });
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/8.png"} />
      </Helmet>
      <ModalComponent />
      <HeaderOne logoName={"logo/4.png"} topClass="top-header" />
      <Banner />
      <ServiceLayout
        sectionClass={"service border-section small-section border-top-0"}
      />
      <CollectionBanner />
      <Paragraph title="title3" inner="title-inner3" line={true} />
      <SpecialProducts
        noTitle={true}
        type="goggles"
        designClass="layout9-box section-b-space ratio_asos p-t-0"
        productSlider={Product4}
        noSlider="true"
        cartClass="cart-info"
      />
      <MasterParallaxBanner
        bg="parallax-banner10"
        parallaxClass="text-center p-left"
        title="2023"
        subTitle1="sale for week"
        subTitle2="special offer"
      />
      <TopCollection
        type="goggles"
        noTitle={true}
        designClass="layout9-box ratio_asos"
        productSlider={Product4}
        noSlider="true"
        cartClass="cart-info"
      />
      <section className="instagram ratio_square section-b-space">
        <Instagram type="goggles" />
      </section>

      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo/4.png"}
      />
    </Fragment>
  );
};

export default Goggles;

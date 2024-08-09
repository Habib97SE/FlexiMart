import React, { Fragment, useEffect } from "react";
import MainBanner from "./components/MainBanner";
import AboutSection from "./components/About-Section";
import TopCollection from "../../../components/common/Collections/Collection3";
import VideoSection from "./components/Video-Section";
import Instagram from "../../../components/common/instagram/instagram2";
import ThemeSettings from "../../../components/customizer/theme-settings";
import Blog from "../../../components/common/Blog/blog1";
import { Product5 } from "../../../services/script";
import ModalComponent from "../../../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Beauty = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#f0b54d");

    return () => {
      document.documentElement.style.removeProperty("--theme-deafult");
    };
  });
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/3.png"} />
      </Helmet>
      <ModalComponent />
      <MainBanner />
      <div className="section-b-space">
        <AboutSection />
      </div>
      <div className="section-b-space">
        <TopCollection
          type="beauty"
          innerClass="title1"
          inner="title-inner1"
          productSlider={Product5}
          title="New Products"
          subtitle="special offer"
          designClass="p-t-0 ratio_asos"
          noSlider="true"
          cartClass="cart-info cart-wrap"
        />
      </div>
      <div className="section-b-space">
        <VideoSection />
      </div>
      <TopCollection
        innerClass="title1"
        inner="title-inner1"
        type="beauty"
        productSlider={Product5}
        title="Top Collections"
        subtitle="special offer"
        designClass="p-t-0 ratio_asos"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <Blog type="beauty" title="title1" inner="title-inner1" />
      <section className="instagram ratio_square section-b-space">
        <Instagram type="beauty" />
      </section>
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"layout3/logo.png"}
      />
      <ThemeSettings />
    </Fragment>
  );
};

export default Beauty;

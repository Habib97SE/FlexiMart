import React, { useEffect } from "react";
import HeaderTwo from "../../../components/headers/header-two";
import Banner from "./components/Banner";
import Collections from "./components/Collection";
import SpecialProducts from "../../../components/common/Collections/TabCollection2";
import Blog from "../../../components/common/Blog/blog1";
import { Product4 } from "../../../services/script";
import ModalComponent from "../../../components/common/Modal";
import Helmet from "react-helmet";
import MasterParallaxBanner from "../Fashion/Components/MasterParallaxBanner";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Furniture = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#d4b196");
  });
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/5.png"} />
      </Helmet>
      <ModalComponent />
      <HeaderTwo
        logoName={"logo/1.png"}
        topClass="top-header top-header-dark2"
      />
      <Banner />
      <Collections />
      <SpecialProducts
        type={"furniture"}
        designClass="section-b-space p-t-0 ratio_asos"
        productSlider={Product4}
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <MasterParallaxBanner
        bg="parallax-banner3"
        parallaxClass="text-center p-center"
        title="2023"
        subTitle1="interior design in home"
        subTitle2="special offer"
      />
      <Blog
        type="furniture"
        sectionClass="blog blog-2 section-b-space ratio3_2"
        title="title1"
        inner="title-inner1"
      />

      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo/1.png"}
      />
    </>
  );
};

export default Furniture;

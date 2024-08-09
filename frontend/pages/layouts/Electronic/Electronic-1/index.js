import React, { Fragment, useEffect } from "react";
import HeaderFour from "../../../../components/headers/header-four";
import ThemeSettings from "../../../../components/customizer/theme-settings";
import SpecialProducts from "../../../../components/common/Collections/TabCollection1";
import About from "./components/About";
import HomeBanner from "./components/home-banner";
import { Product4 } from "../../../../services/script";
import ModalComponent from "../../../../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../../../../components/footers/common/MasterFooter";

const Electronic = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#cc2121");
  });
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/7.png"} />
      </Helmet>
      <ModalComponent />
      <div className="container-fluid layout-8">
        <title>MultiKart | Electronic Store</title>

        <HeaderFour
          fluid={true}
          hfluid={true}
          logoName={"logo/3.png"}
          topClass="top-header white-bg border-bottom-grey"
        />

        <HomeBanner />
        <div className="layout-8-bg">
          {/*About Section*/}
          <About />
          {/*About Section End*/}

          {/*Product slider*/}
          <SpecialProducts
            type={"electronics"}
            fluid="true"
            title="title2"
            inner="title-inner2"
            designClass="section-b-space ratio_square"
            productSlider={Product4}
            noSlider="true"
            cartClass="cart-info cart-wrap"
          />
          {/*Product slider End*/}
        </div>
        <div className="footer-white electronic-footer">
          <MasterFooter
            footerClass={`footer-light`}
            footerLayOut={"light-layout upper-footer"}
            containerFluid={true}
            footerSection={"small-section border-section border-top-0"}
            belowSection={"section-b-space light-layout"}
            belowContainerFluid={true}
            CopyRightFluid={true}
            newLatter={true}
            logoName={"logo/3.png"}
          />
        </div>

        <ThemeSettings />
      </div>
    </Fragment>
  );
};

export default Electronic;

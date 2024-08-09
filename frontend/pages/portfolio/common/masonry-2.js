import React, { useState } from "react";
import { Container, Media } from "reactstrap";
import Masonry from "react-masonry-css";
import { allData, fashionData, bagsData, shoesData, watchData } from "../../../data/portfolioData";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import Lightbox from "react-18-image-lightbox";

const MasterTabPannel = ({ data, grid, colClass }) => {
  const initialIndex = { index: 0, isOpen: false, image: "" };
  const [photoIndex, setPhotoIndex] = useState(initialIndex);

  const onClickImg = (img, i) => {
    setPhotoIndex({ ...photoIndex, index: i, isOpen: true, image: img });
  };

  const onMoveNext = () => {
    const next = (photoIndex.index + 1) % data.length;
    const test = data[(photoIndex.index + 1) % data.length];
    setPhotoIndex({ ...photoIndex, index: next, image: test.img });
  };

  const onMovePrev = () => {
    const prev = (photoIndex.index + data.length - 1) % data.length;
    const test = data[(photoIndex.index + data.length - 1) % data.length];
    setPhotoIndex({ ...photoIndex, index: prev, image: test.img });
  };

  return (
    <>
      {" "}
      <Masonry breakpointCols={grid} className="isotopeContainer row masonry-grid-col" columnClassName={`isotopeSelector ${colClass}`}>
        {data.length > 0
          ? data.map((item, index) => (
              <div className="overlay" key={index}>
                <div className="border-portfolio">
                  <div>
                    <div class="overlay-background" onClick={() => onClickImg(item.img, index)}>
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <Media src={item.img} className="img-fluid" />
                  </div>
                </div>
              </div>
            ))
          : "!! No Blogs Found"}
        {photoIndex.isOpen && (
          <>
            <Lightbox mainSrc={`${photoIndex.image}`} nextSrc={`${data[(photoIndex.index + 1) % data.length].img}`} prevSrc={`${data[(photoIndex.index + data.length - 1) % data.length].img}`} imageTitle={`${photoIndex.index + 1}/${data.length}`} onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })} onMovePrevRequest={onMovePrev} onMoveNextRequest={onMoveNext} />
          </>
        )}
      </Masonry>
    </>
  );
};

const MasonryTwoPage = ({ colClass, grid, fluid }) => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
        <Container fluid={fluid}>
          <Tabs>
            <TabList align="center" id="form1">
              <Tab className={`filter-button project_button ${activeTab == "all" ? "active" : ""}`} onClick={() => setActiveTab("all")} data-filter="all">
                All
              </Tab>
              <Tab className={`filter-button project_button ${activeTab == "fashion" ? "active" : ""}`} onClick={() => setActiveTab("fashion")} data-filter="fashion">
                Fashion
              </Tab>
              <Tab className={`filter-button project_button ${activeTab == "bags" ? "active" : ""}`} onClick={() => setActiveTab("bags")} data-filter="bags">
                Bags
              </Tab>
              <Tab className={`filter-button project_button ${activeTab == "shoes" ? "active" : ""}`} onClick={() => setActiveTab("shoes")} data-filter="shoes">
                Shoes
              </Tab>
              <Tab className={`filter-button project_button ${activeTab == "watch" ? "active" : ""}`} onClick={() => setActiveTab("watch")} data-filter="watch">
                Watch
              </Tab>
            </TabList>
            <Container fluid={fluid}>
              <TabPanel>
                <MasterTabPannel data={allData} grid={grid} colClass={colClass} />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel data={fashionData} grid={grid} colClass={colClass} />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel data={bagsData} grid={grid} colClass={colClass} />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel data={shoesData} grid={grid} colClass={colClass} />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel data={watchData} grid={grid} colClass={colClass} />
              </TabPanel>
            </Container>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default MasonryTwoPage;

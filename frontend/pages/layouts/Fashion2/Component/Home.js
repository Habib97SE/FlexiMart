import React from "react";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home19",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "#",
  },
  {
    img: "home20",
    title: "welcome to fashion",
    desc: "Top collection",
    link: "#",
  },
];

const HomeSlider = () => {
  return (
    <section className="p-0">
      <Slider className="slide-1 home-slider">
        {Data.map((data, i) => {
          return (
            <MasterBanner
              key={i}
              img={data.img}
              link={data.link}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default HomeSlider;

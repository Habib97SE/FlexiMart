import React, { useState, useContext, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import FilterContext from "../../../helpers/filter/FilterContext";
import { useRouter } from "next/router";
import { Collapse } from "reactstrap";

const Price = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(FilterContext);
  const [values, setValues] = useState([0, 500]);
  const price = context.selectedPrice;
  const router = useRouter();
  const setSelectedPrice = context.setSelectedPrice;
  const toggle = () => setIsOpen(!isOpen);
  const [url, setUrl] = useState();
  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname);
  }, []);
  const priceHandle = (value) => {
    if (value) {
      setSelectedPrice({ min: value[0], max: value[1] });
      setValues(value);
      router.push(`${url}?category=${context.state}&brand=${context.selectedBrands}&color=${context.selectedColor}&size=${context.selectedSize}&minPrice=${context.selectedPrice?.min}&maxPrice=${context.selectedPrice?.max}`, undefined, { shallow: true });
    }
  };
  return (
    <div className="collection-collapse-block border-0 open">
      <h3 className="collapse-block-title" onClick={toggle}>
        price
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="wrapper mt-3">
            <div className="range-slider">
              <Range
                values={values}
                step={10}
                min={0}
                max={500}
                onChange={(price) => {
                  priceHandle(price);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "36px",
                      display: "flex",
                      width: "100%",
                    }}>
                    <output style={{ marginTop: "30px" }}>{values[0]}</output>
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#f84c3c", "#ccc"],
                          min: price.min,
                          max: price.max,
                        }),
                        alignSelf: "center",
                      }}>
                      {children}
                    </div>
                    <output style={{ marginTop: "30px" }}>{values[1]}</output>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "16px",
                      width: "16px",
                      borderRadius: "60px",
                      backgroundColor: "#f84c3c",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                    }}></div>
                )}
              />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Price;

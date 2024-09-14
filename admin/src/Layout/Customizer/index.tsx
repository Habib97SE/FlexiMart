"use client";
import { useState } from "react";
import { Button } from "reactstrap";

const Customizer = () => {
  const initialState = {
    ltr: true,
    divName: "RTL",
  };

  const [side, setSide] = useState<any>(initialState);

  const ChangeRtl = (divName: string) => {
    if (divName === "RTL") {
      document.body.classList.add("rtl");
      setSide({ divName: "LTR" });
    } else {
      document.body.classList.remove("rtl");
      setSide({ divName: "RTL" });
    }
  };
  return (
    <Button color="light" className="custom-theme" onClick={() => ChangeRtl(side.divName)}>
      {side.divName}
    </Button>
  );
};

export default Customizer;

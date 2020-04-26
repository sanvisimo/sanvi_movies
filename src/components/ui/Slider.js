import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./Slider.css";

const Slider = () => (
  <Nouislider
    range={{ min: 0, max: 10 }}
    start={[5, 8]}
    connect
    tooltips={[true, true]}
  />
);

export default Slider;

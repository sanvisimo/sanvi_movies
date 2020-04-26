import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./Slider.css";

const Slider = ({ min, max, range, onUpdate }) => {
  return (
    <Nouislider
      range={{ min, max }}
      start={range}
      connect
      tooltips={[true, true]}
      onUpdate={onUpdate}
    />
  );
};

export default Slider;

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import firstImg from "../assets/pexels-1.jpg";
import secondImg from "../assets/pexels-2.jpg";
import thirdImg from "../assets/pexels-3.jpg";
import fourthImg from "../assets/pexels-4.jpg";
import "react-awesome-slider/dist/styles.css";
// import AwesomeSliderStyles from "react-awesome-slider/src/styles";
// import { AwesomeSliderStyles } from "react-awesome-slider/src/styled/fold-out-animation";

const Slider = () => {
  return (
    <AwesomeSlider>
      <div>
        <img src={fourthImg} className="w-full" alt="" />
      </div>
      <div>
        <img src={secondImg} className="w-full" alt="" />
      </div>
      <div>
        <img src={thirdImg} className="w-full" alt="" />
      </div>
    </AwesomeSlider>
  );
};

export default Slider;

import React from "react";
import Slider from "react-slick";
import img_1 from "../../assets/images/main-slider-1.jpeg";
import img_2 from "../../assets/images/main-slider-2.jpeg";
import img_3 from "../../assets/images/main-slider-3.jpeg";
import img_4 from "../../assets/images/slide-1.jpeg";
import img_5 from "../../assets/images/slide-2.jpeg";

export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="grid grid-cols-12 mb-4">
      <Slider {...settings} className=" col-span-12 md:col-span-8">
        <img
          className="h-[400px] w-full object-cover object-right"
          src={img_1}
          alt=""
        />
        <img
          className="h-[400px] w-full object-cover object-right"
          src={img_4}
          alt=""
        />

        <img
          className="h-[400px] w-full object-cover object-right"
          src={img_5}
          alt=""
        />
      </Slider>
      <div className=" col-span-12 md:col-span-4">
        <img className="md:h-[200px] w-full pr-4" src={img_2} alt="" />
        <img className="md:h-[200px] w-full pr-4" src={img_3} alt="" />
      </div>
    </div>
  );
}

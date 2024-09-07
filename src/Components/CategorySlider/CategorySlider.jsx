import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategories(data?.data);
  }
  useEffect(() => {
    getCategories();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (categories.length == 0) {
    return (
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClass=""
      />
    );
  }
  return (
    <Slider {...settings}>
      {categories.map((category) => (
        <div key={category._id} className="pr-4">
          <img
            className="h-[300px] w-full object-cover object-center"
            src={category.image}
            alt=""
          />
          <h4 className="text-center mt-3 text-green-600">{category.name}</h4>
        </div>
      ))}
    </Slider>
  );
}

import React from "react";
import Slider from "react-slick";

import cer2 from "../assets/cognizance2.jpg";
import cer1 from "../assets/cognizance1.jpg";
import cer3 from "../assets/laravel.jpg";
import cer4 from "../assets/tecnology.jpg";
import cer5 from "../assets/Networking.jpg";
import cer6 from "../assets/udemy.jpg";

import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        name="Certificates"
        className="flex justify-center items-center my-4"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          My Certificates
        </h1>
      </div>
      <div className="p-[10px]">
        <Slider {...settings}>
          <Card img={cer1} />
          <Card img={cer2} />
          <Card img={cer3} />
          <Card img={cer4} />
          <Card img={cer5} />
          <Card img={cer6} />
        </Slider>
      </div>
    </>
  );
};

export default Certificates;

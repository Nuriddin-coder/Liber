import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//// Import Img:
import SwiperImg1 from "../../../../../assets/imgs/swiper-img1.png";
import SwiperImg2 from "../../../../../assets/imgs/swiper-img2.png";
import SwiperImg3 from "../../../../../assets/imgs/swiper-img3.png";

export const SwiperMain = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="w-[600px]">
      <Slider {...settings}>
        <div>
          <img src={SwiperImg1} alt="img" />
          <p className="text-center text-xl font-normal text-text">1984</p>
        </div>
        <div>
          <img src={SwiperImg2} alt="img" />
          <p className="text-center text-xl font-normal text-text">Code 8</p>
        </div>
        <div>
          <img src={SwiperImg3} alt="img" />
          <p className="text-center text-xl font-normal text-text">Rich dad poor dad</p>
        </div>
      </Slider>
    </div>
  );
};

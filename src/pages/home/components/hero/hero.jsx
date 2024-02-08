import React from "react";
import { SwiperMain } from "./swiper";
import { Buttons } from "../../../../components/buttons";
import { HeartIcon } from "../../../../assets/icons/heart-icon";

export const Hero = () => {
  return (
    <div className="container mx-auto flex items-center mt-[20px] justify-between gap-6">
      <div className="bg-start bg-primarySoft flex w-full justify-between rounded-[10px] bg-[url('./assets/imgs/hero-bg-img-girl.png')] bg-left-bottom bg-no-repeat p-8">
        <h1 className="text-2xl font-bold leading-[45px] text-text">
          Ko'p O'qilyotganlar
        </h1>
        <div>
          <SwiperMain />
        </div>
      </div>
      <div className="h-[361px] w-[361px] bg-[url('./assets/imgs/subscribe-img.png')] bg-cover bg-center bg-no-repeat">
        <div className="px-[24px] py-[40px]">
          <h2 className="text-white mb-[20px] text-2xl font-bold">Kitob O'qishhi yoqtirasmi?</h2>
          <p className="text-lg text-white mb-[78px]">
            Unda pulingizni tejash uchun o'zingiz yoqtirgan rukunga obuna
            bo'ling
          </p>
          <Buttons variant="secondary">
            <HeartIcon />
            Obuna bo'lish
          </Buttons>
        </div>
      </div>
    </div>
  );
};

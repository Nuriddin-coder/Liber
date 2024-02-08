import React from "react";

//// Import ICONs:
import { Facebook } from "../../../../assets/icons/facebook";
import { Youtube } from "../../../../assets/icons/youtube";
import { Tiktok } from "../../../../assets/icons/tiktok";
import { Telegram } from "../../../../assets/icons/telegram";
import { Instagram } from "../../../../assets/icons/instagram";
import { Uzcard } from "../../../../assets/icons/uzcard";

export const FooterBottom = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto flex gap-[100px] pb-[20px] pt-[16px]">
        <div>
          <h2 className="text-[14px] font-normal text-white">
            Ijtimoiy Tarmoqlar
          </h2>
          <div className="mt-[16px] flex items-center gap-[25px]">
            <Facebook />
            <Youtube />
            <Tiktok />
            <Telegram />
            <Instagram />
          </div>
        </div>
        <div>
          <h2 className="font-light leading-[14px] text-white">Bog'lanish</h2>
          <div className="mt-[24px]">
            <a
              className="font-light leading-[16px] text-white"
              href="tel+998902537753"
            >
              +998 90 253 77 53
            </a>
            <a className="font-light leading-[16px] text-white" href="email">
              support@liber.uz
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-light leading-[14px] text-white">
            Biz qabul qilamiz
          </h2>
          <div className="mt-[16px] flex items-center">
            <Uzcard />
            <Uzcard />
            <Uzcard />
          </div>
        </div>
      </div>
    </section>
  );
};

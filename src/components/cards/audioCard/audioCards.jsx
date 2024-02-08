import React from "react";

export const AudioCards = ({
  id,
  title,
  img,
  text,
  rateIcon: RateIcon,
  rateNum,
  audioIcon: AudioIcon,
}) => {
  return (
    <div key={id} className="max-w-[240px]">
      <img src={img} alt="img" />
      <div className="px-[10px]">
        <h2 className="mt-[18px] text-[20px] font-semibold leading-[37px] text-darkPurple">
          {title}
        </h2>
        <p className="mb-[16px] text-[14px] leading-[19px] text-primary">
          {text}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[12px]">
            <RateIcon />
            <p className="text-secondarySoft text-[18px] font-semibold">
              {rateNum}
            </p>
          </span>
          <span className="flex items-center gap-[18px]">
            <button>
              <AudioIcon />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

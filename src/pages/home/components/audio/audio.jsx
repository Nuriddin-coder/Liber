import React from "react";
import { AudioData } from "../../../../data/audio";
import { AudioCards } from "../../../../components/cards/audioCard";

export const Audio = () => {
  return (
    <section className="container mx-auto mb-[95px]">
      <h2 className="mt-[64px] text-[32px] font-semibold leading-[40px]">
        Audio kitoblar
      </h2>
      <div className="mt-[32px] flex items-center justify-between">
        {AudioData.map((item) => (
          <AudioCards {...item} />
        ))}
      </div>
    </section>
  );
};

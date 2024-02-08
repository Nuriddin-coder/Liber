import React from "react";

export const ServiceCards = ({ title, text, id, icon: Icons }) => {
  return (
    <div key={id} className="flex max-w-[322px] items-center gap-[20px]">
      <Icons />
      <div>
        <h2 className="font-semibold text-darkPurple">{title}</h2>
        <p className="text-[11px] text-grey">{text}</p>
      </div>
    </div>
  );
};

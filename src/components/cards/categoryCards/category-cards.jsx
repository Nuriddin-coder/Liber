import React from "react";

export const CategoryCards = ({ title, id, img }) => {
  return (
    <div className="w-[200px] cursor-pointer">
      <img src={img} alt="img" />
      <p className="text-center text-[18px] text-text font-semibold">{title}</p>
    </div>
  );
};

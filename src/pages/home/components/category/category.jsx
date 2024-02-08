import React from "react";
import { CategoryData } from "../../../../data/data";

export const Category = () => {
  return (
    <div className="container mx-auto border-grey2 flex items-center gap-[20px] border-y-[1px] py-[10px]">
      {CategoryData.map((item) => (
        <a key={item.id} className="text-primary font-semibold" href="#">{item.title}</a>
      ))}
    </div>
  );
};

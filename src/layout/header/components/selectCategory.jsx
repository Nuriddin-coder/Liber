import React from "react";
import { CategoryIcon } from "../../../assets/icons/category-icon";

export const SelectCategory = () => {
  return (
    <div className="border-grey mr-[10px] flex items-center rounded-l-[14px] border-[1px] border-solid pl-[14px]">
      <CategoryIcon />
      <select defaultValue={'Rukublar'} className="select border-none focus:outline-none appearance-none">
        <option selected>Rukunlar</option>
        <option>Kitoblar</option>
        <option>Audio Kitoblar</option>
      </select>
    </div>
  );
};

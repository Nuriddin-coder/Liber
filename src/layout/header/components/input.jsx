import React from "react";
import { SearchIcon } from "../../../assets/icons/search-icon";

export const Input = () => {
  return (
    <div className="mx-w-[555px] bg-inputBg border-grey join rounded-l-[0] rounded-r-[14px] border-[1px] border-solid">
      <input
        className="input join-item input-bordered border-none bg-transparent focus:outline-none"
        placeholder="Email"
      />
      <div className="flex border-l-2 pl-5">
        <button className="border-none bg-transparent pr-5 hover:bg-transparent">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

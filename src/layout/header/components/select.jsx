import React from "react";
import { UzbIcon } from "../../../assets/icons/uzb-icon";
import { RusIcon } from "../../../assets/icons/russia-icon";

export const Select = () => {
  const [flag, setFlag] = React.useState("Uz");

  const changeFlag = (e) => {
    const target = e.target.value;

    if (target === "Uz" && "Ru") {
      setFlag("Uz");
    } else {
      setFlag("Ru");
    }
  };

  return (
    <div className="flex items-center justify-center rounded-[14px] bg-[#EEF4FF] pl-[15px]">
      {flag == "Uz" ? <UzbIcon /> : <RusIcon />}
      <select
        onChange={changeFlag}
        value={flag}
        className="select border-none bg-transparent focus:outline-none"
      >
        <option value={"Uz"}>Uz</option>
        <option value={"Ru"}>Ru</option>
      </select>
    </div>
  );
};

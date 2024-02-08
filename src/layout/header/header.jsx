import React from "react";
import { LogoMain } from "../../components/Logo";
import { Select } from "./components/select";
import { Input } from "./components/input";
import { SelectCategory } from "./components/selectCategory";
import { ModalLogin } from "./components/modal-login";

export const Header = () => {
  return (
    <div className="container mx-auto navbar mt-[15px] flex justify-between bg-base-100">
      <LogoMain />
      <div>
        <SelectCategory />
        <Input />
      </div>
      <div className="flex items-center gap-[20px]">
        <Select />
        <ModalLogin />

        {/* <Buttons icon={Profile} variant="primary">
          Kirish
        </Buttons> */}
      </div>
    </div>
  );
};

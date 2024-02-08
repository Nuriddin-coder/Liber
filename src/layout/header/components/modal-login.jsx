import React from "react";
import { Buttons } from "../../../components/buttons";
import { Profile } from "../../../assets/icons/profile";

export const ModalLogin = () => {
  return (
    <>
      <Buttons
        icon={Profile}
        onClick={() => document.getElementById("my_modal_2").showModal()}
        variant="primary"
      >
        Kirish
      </Buttons>

      <dialog id="my_modal_2" className="modal">
        <div className="bg-modalBgClr modal-box h-[500px] max-w-[700px]">
          <h3 className="mx-auto mt-[70px] w-[170px] text-center text-[20px] font-bold text-white">
            Assalom Alyukum Hush Kelibsiz !
          </h3>
          <div className="mx-auto max-w-[343px]">
            <p className="mt-[74px] text-[14px] font-semibold text-white">
              Mobile raqam
            </p>
            <input
              className="border-stroke text-stroke placeholder:text-stroke w-full rounded-[14px] border-[2px] border-solid bg-transparent px-[12px] py-[13px] outline-none"
              type="tel"
              placeholder="+998 _ _  _ _ _  _ _  _ _"
            />
          </div>
          <div className="ml-[280px] mt-[30px] max-w-[343px]">
            <Buttons variant="primary">Kirish</Buttons>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

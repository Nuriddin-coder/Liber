import React from "react";
import { NewData } from "../../../../data/new";
import { NewCards } from "../../../../components/cards/newCards";

export const New = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="mt-[64px] text-[32px] font-semibold leading-[40px]">
          Yangi qo'shilganlar{" "}
        </h2>
        <div className="mt-[32px] flex items-center justify-between">
          {NewData.map((item) => (
            <NewCards {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

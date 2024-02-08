import React from "react";
import { ServiceData } from "../../../../data/service";
import { ServiceCards } from "../../../../components/cards/secviseCards";

export const Service = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-[60px] flex items-center justify-between">
          {ServiceData.map((item) => (
            <ServiceCards {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

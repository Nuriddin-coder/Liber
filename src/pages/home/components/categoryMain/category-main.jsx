import React from "react";

import { CategoryMainData } from "../../../../data/category-main";
import { CategoryCards } from "../../../../components/cards/categoryCards";

export const CategoryMain = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2>Rukunlar</h2>

        <div className="mt-[32px] flex items-center justify-between">
          {CategoryMainData.map((item) => (
            <CategoryCards {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

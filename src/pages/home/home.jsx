import React from "react";
import { Category } from "./components/category";
import { Hero } from "./components/hero";
import { Service } from "./components/service";
import { New } from "./components/new";
import { Audio } from "./components/audio";
import { CategoryMain } from "./components/categoryMain";

export const Home = () => {
  return (
    <div className="pt-[20px]">
      <Category />
      <Hero />
      <Service />
      <CategoryMain />
      <New />
      <Audio />
    </div>
  );
};

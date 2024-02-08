import React from "react";
import clsx from "clsx";

export const Buttons = ({
  variant,
  icon: Icon,
  onClick,
  className,
  type,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("flex items-center justify-center px-[24px] py-[7px]", {
        "gap-[10px] rounded-[14px] bg-primary text-white":
          variant === "primary",
        "w-full gap-[12px] rounded-[14px] bg-white text-lg font-semibold text-black":
          variant === "secondary",
      })}
    >
      {Icon ? <Icon /> : ""}
      {children}
    </button>
  );
};

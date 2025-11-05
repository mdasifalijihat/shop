import { headerData } from "@/constants/data";
import Link from "next/link";
import React from "react";

function HeaderMenu() {
  return (
    <div className=" hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-normal text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.link}
          className={`hover:text-shop_light_green relative group transition-all duration-300:`}
        >
          {item?.title}
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:right-0"></span>
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;

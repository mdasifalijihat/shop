"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-normal text-lightColor">
      {headerData?.map((item) => {
        const isActive = pathname === item?.href;

        return (
          <Link
            key={item?.title}
            href={item?.href}
            className={`relative group transition-all duration-300 ${
              isActive ? "text-shop_light_green" : "hover:text-shop_light_green"
            }`}
          >
            {item?.title}
            {/* Left underline */}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
                isActive ? "w-1/2 left-0" : ""
              }`}
            ></span>
            {/* Right underline */}
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
                isActive ? "w-1/2 right-0" : ""
              }`}
            ></span>
          </Link>
        );
      })}
    </div>
  );
}

export default HeaderMenu;

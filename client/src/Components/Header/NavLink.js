import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, title, isHomePage, isScrolled }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  const hoverColor = isHomePage
    ? isScrolled
      ? "hover:text-primary-black"
      : "hover:text-primary-orangeHeader"
    : "hover:text-primary-black";

  return (
    <div className="flex justify-center items-center xs:w-[70px] sm:w-[80px] md:w-[100px] xl:w-[140px] 2xl:w-[150px] h-full transition-colors duration-300 cursor-pointer  relative">
      <div
        className={`absolute w-[25px] rounded-[10px] h-[2px] bg-primary-white z-5 absCentered transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <Link to={to} className="w-full h-full flex justify-center items-center">
        <button
          className={` ${isActive ? 'font-bold' : 'font-medium'} text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white transition-all ease-in-out ${hoverColor}`}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default NavLink;

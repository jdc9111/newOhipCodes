import React from "react";
import ohipCard from "../images/ohipcard.svg";

const MainNavbar = () => {
  return (
    <div class="navbar sticky top-0 z-50 mb-5 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div class="flex-none">
        <img src={ohipCard} className="w-12 h-12" />
      </div>
      <div class="flex-1 px-2">
        <span class="font-bold text-2xl text-green-400">OHIP</span>
        <span class="font-bold text-2xl">codes.com</span>
      </div>
    </div>
  );
};

export default MainNavbar;

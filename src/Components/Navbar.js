import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div class="navbar sticky top-0 z-50 mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div class="flex-none">
        <Link to={`${props.back}`} class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      </div>
      <div class="flex-1 px-2 mx-0">
        <span class="font-bold text-2xl text-green-400">OHIP</span>
        <span class="font-bold text-2xl">codes.com</span>
      </div>
    </div>
  );
};

export default Navbar;

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M15 19l-7-7 7-7"
  />
</svg>;

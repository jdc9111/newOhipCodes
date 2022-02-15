import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cloud from "../images/anesthesia.svg";
import rad from "../images/fracture.svg";

const MainButton = (props) => {
  return (
    <div>
    <Link to={props.link}>
      <div class="mx-4">
        <div
          class={`${props.color} ${props.textcolour} mx-auto text-xl text-center font-semibold my-2 max-w-md rounded-lg px-3 py-2`}
        >
          <div className="flex justify-between items-center">
            <div classname="flex">
              <img class="h-14 w-14 p-1" src={props.pic} />
            </div>
            <div>
              <h1 className="flex pl-2">{props.title}</h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 ml-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default MainButton;

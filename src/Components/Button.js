import React from "react";
import { Link } from "react-router-dom";
import MainTable from "./MainTable";

const Button = (props) => {
  return (
    <div class={`p-2 ${props.color} rounded-lg`}>
      <Link to={props.link}>
        <div class="flex justify-center">
          <img
            class="h-12 w-12 flex justify-center items-baseline"
            src={props.img}
          />
        </div>
        <div class="flex justify-center content-center">
          <div>
            <h5 class="text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.topic}
            </h5>
          </div>
          
        </div>
        <div class="flex justify-end pr-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="black"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
      </Link>
    </div>
  );
};

export default Button;

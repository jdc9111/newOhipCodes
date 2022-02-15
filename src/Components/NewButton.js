import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cloud from "../images/anesthesia.svg";
import rad from "../images/fracture.svg";

const NewButton = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <div class="grid place-items-center">
          <div class={`${props.color} rounded mb-2`}>
          <img class="h-12 w-14 p-2" src={props.pic} />
          </div>
        </div>
        <h1 class="text-center text-white text-sm font-semibold mb-6">{props.title}</h1>
      
      </Link>
    </div>
  );
};

export default NewButton;

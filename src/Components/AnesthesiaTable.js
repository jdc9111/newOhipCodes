import { anesthesiaCodes } from "./anesthesiaCodes";
import SampleModal from "./SampleModal";
import { useState, useEffect } from "react";
import cloud from "../images/bluecloud.svg";
import { Link } from "react-router-dom";

const AnesthesiaTable = (props) => {
  
    {/*}
  console.log(props.type);

  const [showObj, setShowObj] = useState({});
  useEffect(() => {
    console.log(showObj);
  });

  function updateShowStatus(code, newValue) {
    const newShowObj = { ...showObj, ...{ [code]: newValue } };
    setShowObj(newShowObj);
  }

*/}
  return (
    <div class="mx-4">
      <div class="text-center font-semibold">
        
        <h2 class="text-2xl pb-2">{props.title}</h2>
      </div>
      <div class="anesthesia p-5 text-black rounded-lg max-w-lg m-auto">

        {anesthesiaCodes
          .filter((code) => code.premium === props.type)
          .map((filteredCode, i) => (
            <div class="grid grid-cols-8 gap-1">
              <div class="col-span-2 pl-2 font-bold">{filteredCode.code}</div>
              <div class="col-span-4 font-semibold">
                {filteredCode.description}
              </div>
              <div class="col-span-2 pr-2 justify-end">
                {filteredCode.units}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default AnesthesiaTable;

import { ohipCodes } from "./ohipCodes";
import SampleModal from "./SampleModal";
import { useState, useEffect } from "react";
import cloud from "../images/bluecloud.svg";

const MainTable = (props) => {
  console.log(props.type);

  const [showObj, setShowObj] = useState({});
  useEffect(() => {
    console.log(showObj);
  });

  function updateShowStatus(code, newValue) {
    const newShowObj = { ...showObj, ...{ [code]: newValue } };
    setShowObj(newShowObj);
  }

  return (
    <div class="mb-6">
      <h2 class="font-bold pb-2 pt-3 text-info">{props.title}</h2>
      <div class="overflow-x-auto">
        {ohipCodes
          .filter((code) => code.category === props.type)
          .map((filteredCode, i) => (
            <div class="grid grid-cols-5 gap-1 pt-1 pb-1 border-black border-t">
              <div class="col-span-1 font-semibold">{filteredCode.code}</div>
              
              
              <div class="col-span-3">
                <div class="flex items-center">
                <div
                  class="pr-1 text-sm"
                  dangerouslySetInnerHTML={filteredCode.description}
                ></div>
                <div>
                {filteredCode.link && (
                  <a href={filteredCode.link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="skyblue"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                )}</div><div>{filteredCode.sedation && (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="rgb(125 211 252)"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                )} </div>{filteredCode.notes && (
                  <>
                    <button
                      className="pl-2"
                      onClick={() =>
                        updateShowStatus(filteredCode.code, true)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7"
                        viewBox="0 0 20 20"
                        fill="yellow"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <SampleModal
                      text={filteredCode.notes}
                      title={filteredCode.code}
                      onClose={() =>
                        updateShowStatus(filteredCode.code, false)
                      }
                      show={showObj[filteredCode.code]}
                    />
                  </>
                )}</div>
                
                  <div class="text-xs pl-3">
                    {filteredCode.blurb}
                   
                
    
                   
                  </div>
              </div>
            
              <div class="col-span-1 text-right pr-1 text-sm">{filteredCode.fee}</div>
            </div>
          ))}


      
      
  
      </div>
    
    </div>

  );
};

export default MainTable;

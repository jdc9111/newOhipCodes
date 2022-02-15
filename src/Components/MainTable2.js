import { ohipCodes } from "./ohipCodes";
import SampleModal from "./SampleModal";
import { useState, useEffect } from "react";
import cloud from "../images/cloud.svg";

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
    <div class="mb-2 mt-4">
      <h2 class="font-bold pb-2">{props.title}</h2>
      <div class="overflow-x-auto">
        <table class="table table-fixed w-full table-compact rounded">
          <thead>
            <tr>
              <th class="w-2/12">Code</th>
              <th class="w-4/12 whitespace-normal">Description</th>
              <th class="w-2/12">$</th>
              <th class="w-5/12">Notes</th>
            </tr>
          </thead>
          <tbody>
            {ohipCodes
              .filter((code) => code.category === props.type)
              .map((filteredCode, i) => (
                <tr key={filteredCode.code}>
                  <th class="semi-bold">{filteredCode.code}</th>
                  <td>
                    <div
                      class="whitespace-normal"
                      dangerouslySetInnerHTML={filteredCode.description}
                    ></div>
                  </td>
                  <td>{filteredCode.fee}</td>

                  <td>
                    {filteredCode.notes && (
                      <div class="whitespace-normal">
                        <div>
                          <button
                            onClick={() =>
                              updateShowStatus(filteredCode.code, true)
                            }
                            class="btn btn-primary btn-xs"
                          >
                            Notes
                          </button>
                          <SampleModal
                            text={filteredCode.notes}
                            title={filteredCode.code}
                            onClose={() =>
                              updateShowStatus(filteredCode.code, false)
                            }
                            show={showObj[filteredCode.code]}
                          />
                        </div>
                      </div>
                    )}

                    {filteredCode.blurb && (
                      <p class="whitespace-normal text-xs">
                        {filteredCode.blurb}
                      </p>
                    )}
                    {filteredCode.link && (
                      <a href={filteredCode.link}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
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
                    )}
                    {filteredCode.sedation && (
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
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MainTable;

import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainTable from "../Components/MainTable";
import Modals from "../Components/Modals";
import Breadcrumb from "../Components/Breadcrumb";
import Modal from "../Components/Modal";
import Reminder from "../Components/Reminder";
import AnesthesiaTable from "../Components/AnesthesiaTable";
import SampleModal from "../Components/SampleModal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sedation = () => {
  const [showObj, setShowObj] = useState({});
  useEffect(() => {
    console.log(showObj);
  });

  function updateShowStatus(code, newValue) {
    const newShowObj = { ...showObj, ...{ [code]: newValue } };
    setShowObj(newShowObj);
  }

  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <Navbar back="/" />
      <Breadcrumb title="Sedation Codes" />

      <div class="text-center font-semibold">
        <h2 class="text-2xl pt-2 mt-3">Procedure code + 'C'</h2>
        <p class="text-4xl">+</p>
        <h2 class="text-2xl">Time units (per 15 mins)</h2>
        <p>6 base units to start</p>
        <p class="text-4xl">+</p>
      </div>

      <AnesthesiaTable title="Time Premiums" type="time" />

      <div class="text-center font-semibold">
        <p class="text-4xl">+</p>
        <div class="flex justify-center text-2xl">
          <div class='pr-2'>ASA Premium</div>
          <div><Link to="/Asa"><svg
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
                    </svg></Link></div></div>
      </div>
      <AnesthesiaTable type="ASA" link="/Asa"/>
      <h2 class="text-4xl text-center text-bold">+</h2>
      <div class="flex justify-center text-2xl">
          <div class='pr-2'>Emergency? </div>
          <div><Link to="/Asa"><svg
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
                    </svg></Link></div></div>
      <AnesthesiaTable type="emergency" />
      <h2 class="text-4xl text-center text-bold">+</h2>
      <AnesthesiaTable title="Call-in?" type="call-in" />
      <h2 class="text-4xl text-center text-bold">+</h2>
      
      <div class="flex justify-center text-2xl">
          <div class='pr-2 font-semibold'>Bariatric? </div>
          <div><a href="https://www.mdcalc.com/body-mass-index-bmi-body-surface-area-bsa"><svg
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
                    </svg></a></div></div>
      <AnesthesiaTable type="bariatric" />
      <h2 class="text-4xl text-center text-bold">+</h2>
      <AnesthesiaTable title="Odd Position?" type="position" />
      <h2 class="text-4xl text-center text-bold">+</h2>
      <AnesthesiaTable title="Age Premium" type="age" />

      <Footer />
    </div>
  );
};

export default Sedation;

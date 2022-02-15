import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainTable from "../Components/MainTable";
import MainTable2 from "../Components/MainTable2";
import Modals from "../Components/Modals";
import Breadcrumb from "../Components/Breadcrumb";
import Modal from "../Components/Modal";
import Reminder from "../Components/Reminder";
import AnesthesiaTable from "../Components/AnesthesiaTable";
import { classes } from "../Components/classes";

const Asacodes = () => {
  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <Navbar back="/Sedation" />
      <Breadcrumb title="ASA Codes" />
      <div>
        {classes.map((asa) => (
          <div className="mt-6 ml-4 mr-4 anesthesia text-black rounded-md">
            <div className="pl-3 pt-3 pb-3 pr">
              <h2 className="font-bold text-xl">{asa.class}</h2>
              <h3 className="pb-2 font-semibold pr-2 mr-2">{asa.definition}</h3>
              <h4 className="text-sm pt-2 pr-4 pl-2 pb-3">{asa.examples}</h4>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Asacodes;

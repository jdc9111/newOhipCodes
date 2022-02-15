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

const Assessment = () => {
  return (
    <div
      className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2"
      id="test"
    >
      <Navbar back="/" />
      <Breadcrumb title="Assessment Codes" />

      <div
        class="collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Assessment Codes</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="weekday" title="Weekday 08h-17h" />
            <MainTable type="eve" title="Evening 17h-24h" />
            <MainTable type="weekend" title="Weekends and Holidays" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Premium Codes</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="gk" title="For G and K Codes (not H)" />
            <MainTable type="premium" title="For Procedures" />
            <MainTable type="trauma" title="Trauma" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Critical Care</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="lifethreatening" title="Life Threatening" />
            <Reminder text="Includes	IVs, art	lines,	ETT, NG, foley,	defib, cardioversions" />
            <Reminder text="E420 Trauma Premium +50%" />

            <MainTable type="otherresusc" title="Other Resuscitation" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Admissions</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="admit" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Consults</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="consult" />
            <MainTable type="phoneconsult" title="Phone Consults" />
            <MainTable type="criticall" title="CritiCall" />
            <MainTable type="midwife" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          Counselling and Mental Health
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="mental" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Forms</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="forms" />
    
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          Detention in Ambulance
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="ems" />
   
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Assessment;

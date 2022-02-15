import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainTable from "../Components/MainTable";
import MainTable2 from "../Components/MainTable2";
import Modals from "../Components/Modals";
import Breadcrumb from "../Components/Breadcrumb";
import Modal from "../Components/Modal";
import Reminder from "../Components/Reminder";

const Procedures = () => {
  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <Navbar back="/" />
      <Breadcrumb title="Procedures" />

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Airway</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="airway" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          IVs, Lines, Injections
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="lines" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Skin, abscess, I+D</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="skin" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Foreign Body</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="fb" />
          </div>
        </div>
      </div>



      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Lacerations</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="simplelac" title="Simple Laceration" />
            <Reminder text="50% for glue" />
            <MainTable type="facelac" title="Face, Bleeder, Layers" />
            <Reminder text="50% for glue" />
            <MainTable type="complexlac" title="Complex Laceration" />

            <MainTable type="tendon" title="Tendon Repair" />
            <MainTable type="misclac" title="Miscellaneous"/>
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          Plastic Surgery, Wounds, Abscesses, Tendons
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="plastic" />
            <MainTable type="tendon" title="Tendon Repair" />
            <MainTable
              type="wounddebride"
              title="Debridement of wounds/ulcer"
            />
            <MainTable type="burndebride" title="Burn debridement" />
            <Reminder text="R150-153 not billable by ED MD" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Cardiovascular</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="cvs" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          Chest and Respirology
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="chest" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">ENT</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="ent" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">GI</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="gi" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          Neurology and Nerve Blocks
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="neuro" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Ob/Gyne</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="gyne" title="Gyne" />
            <MainTable type="ob" title="OB" />
          </div>
        </div>
      </div>

      <div class="mt-2 collapse border rounded-box border-base-300 collapse-plus">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Opthalmology</div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="optho" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Procedures;

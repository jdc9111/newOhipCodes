import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MainTable from "../Components/MainTable";
import Modals from "../Components/Modals";
import Breadcrumb from "../Components/Breadcrumb";
import Modal from "../Components/Modal";
import Reminder from "../Components/Reminder";
import hand from "../images/hand.svg";
import elbow from "../images/elbow.svg";
import shoulder from "../images/shoulder.svg";
import hip from "../images/hip.svg";
import knee from "../images/knee.svg";
import foot from "../images/foot.svg";
import cast from "../images/cast.svg";

const Assessment = () => {
  return (
    <div
      className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2"
      id="test"
    >
      <Navbar back="/" />
      <Breadcrumb title="F and D Codes" />

      <div
        class="collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <img src={hand} class="w-8 h-8" />
          </div>
          <div class="pl-2">Hand, Carpals</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="hand" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <img src={elbow} class="w-8 h-8 fill-white" />
          </div>
          <div class="pl-2">Wrist, Forearm, Elbow</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="arm" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <img src={shoulder} class="w-8 h-8 fill-white" />
          </div>
          <div class="pl-2">Shoulder</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="shoulder" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <img src={hip} class="w-8 h-8 fill-white" />
          </div>
          <div class="pl-2">Pelvis, Hip, Femur</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="hip" />
            <Reminder text="G260 3-in-1 hip block $80" />
            <Reminder text="G606 Fem n. block, fascial iliaca block $50" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <img src={knee} class="w-8 h-8 fill-white" />
          </div>
          <div class="pl-2">Knee, Tib, Fib</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="knee" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <img src={foot} class="w-8 h-8 fill-white" />
          </div>
          <div class="pl-2">Foot, Ankle</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="foot" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
        <div>
            <img src={cast} class="w-8 h-8 fill-white" />
          </div>
          <div class="pr-2">Casts</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="cast" />
            <Reminder text="Do not bill with F or within 2 weeks of F code" />
          </div>
        </div>
      </div>

      <div
        class="mt-2 collapse border rounded-box border-base-300 collapse-plus"
        id="first"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="pl-2">Other MSK</div>
        </div>
        <div class="collapse-content">
          <div class="overflow-x-auto">
            <MainTable type="othermsk" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Assessment;

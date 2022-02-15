import Button from "../Components/Button";
import MainNavbar from "../Components/MainNavbar";
import { Link } from "react-router-dom";
import lungs from "../images/lungs.svg";
import id from "../images/id.svg";
import derm from "../images/derm.svg";
import heart from "../images/heart.svg";
import eye from "../images/eyeball.svg";
import pooh from "../images/pooh.svg";
import ear from "../images/ear.svg";
import tooth from "../images/tooth.svg";
import brain from "../images/neuro.svg";
import penis from "../images/penis.svg";
import gyne from "../images/gyne.svg";
import psych from "../images/psych.svg";
import msk from "../images/msk.svg";
import nyd from "../images/question.svg";
import blood from "../images/blood.svg";
import laceration from "../images/laceration.svg";
import piggy from "../images/money.svg";
import breast from "../images/breast.svg";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Breadcrumb from "../Components/Breadcrumb";
import MainButton from "../Components/MainButton";

function Diagnostic() {
  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <Navbar back="/"/>
      <Breadcrumb title="Diagnositc Codes" />

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <MainButton
          title="Breast"
          pic={breast}
          color="bg-pink-100"
          link="/Breast"
          textcolour="text-black"
        />

        <MainButton
          title="Cardiology"
          pic={heart}
          color="bg-red-300"
          link="/Cardio"
          textcolour="text-black"
        />
        <MainButton
          title="Chest and Respirology"
          pic={lungs}
          color="bg-pink-200"
          link="/Resp"
          textcolour="text-black"
        />

        <MainButton
          title="Dermatology"
          pic={derm}
          color="bg-pink-300"
          link="/Derm"
          textcolour="text-black"
        />

        <MainButton
          title="Endocrine and Blood"
          pic={blood}
          color="bg-white"
          link="/Endo"
          textcolour="text-black"
        />

        <MainButton
          title="ENT"
          pic={ear}
          color="bg-yellow-300"
          link="/ENT"
          textcolour="text-black"
        />

        <MainButton
          title="GI"
          pic={pooh}
          color="bg-yellow-500"
          link="/GI"
          textcolour="text-black"
        />
        <MainButton
          title="Gynecology"
          pic={gyne}
          color="bg-white"
          link="/Gyne"
          textcolour="text-black"
        />

        <MainButton
          title="Infectious Disease"
          pic={id}
          color="bg-yellow-100"
          link="/Infection"
          textcolour="text-black"
        />

        <MainButton
          title="Laceration"
          pic={laceration}
          color="bg-white"
          link="/Laceration"
          textcolour="text-black"
        />

        <MainButton
          title="MSK"
          pic={msk}
          color="neuro"
          link="/Msk"
          textcolour="text-black"
        />

        <MainButton
          title="Neurology"
          pic={brain}
          color="neuro"
          link="/Neuro"
          textcolour="text-black"
        />

        <MainButton
          title="Opthalmology"
          pic={eye}
          color="bg-white"
          link="/Eye"
          textcolour="text-black"
        />

        <MainButton
          title="Psychiatry & Substance Use"
          pic={psych}
          color="bg-red-300"
          link="/Psych"
          textcolour="text-black"
        />

        <MainButton
          title="Teeth and supporting tissues"
          pic={tooth}
          color="bg-blue-100"
          link="/Teeth"
          textcolour="text-black"
        />

        <MainButton
          title="Urology"
          pic={penis}
          color="bg-blue-200"
          link="/GU"
          textcolour="text-black"
        />

        <MainButton
          title="NYD"
          pic={nyd}
          color="bg-yellow-200"
          link="/Nyd"
          textcolour="text-black"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Diagnostic;

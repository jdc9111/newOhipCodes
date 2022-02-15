import MainNavbar from "./Components/MainNavbar";
import Footer from "./Components/Footer";
import MainButton from "./Components/MainButton";
import cloud from "./images/cloud.svg";
import numbers from "./images/numbers.svg";
import piggy from "./images/money.svg";
import msk from "./images/msk.svg";
import bullseye from "./images/bullseye.svg";
import NewButton from "./Components/NewButton";
import { Link } from "react-router-dom";
import Asacodes from "./routes/Asacodes";

function App() {
  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <MainNavbar />

      <div class="grid grid-cols-1">
        <MainButton
          title="Assessments, Counselling, and Forms"
          /*color="bg-primary"*/
          color="bg-green-400"
          link="/Assessment"
          pic={piggy}
          textcolour="text-black"
        />

        <MainButton
          title="Procedures"
          /*color="bg-accent" */
          color="bg-purple-300"
          link="/Procedures"
          pic={bullseye}
          textcolour="text-black"
        />

        <MainButton
          title="Fracture and D Codes"
          color="fractures"
          link="/FandDcodes"
          pic={msk}
          textcolour="text-black"
        />

        <MainButton
          title="Anesthesia + Sedation Codes"
          color="anesthesia"
          link="/Sedation"
          textcolour="text-black"
          pic={cloud}
        />
        <MainButton
          title="Diagnostic Codes"
          color="bg-yellow-200"
          link="/Diagnostic"
          pic={numbers}
          textcolour="text-black"
        />
      </div>

        {/*
      <div class="grid grid-cols-3 gap-2 mx-3 mt-5">

        <NewButton title="Assessment, Counselling, Forms" color="bg-green-400" link="/Diagnostic" pic={piggy}/>
        <NewButton title="Procedures" color="bg-purple-300" link="/Diagnostic" pic={bullseye}/>
        <NewButton title="F and D Codes" color="fractures" link="/FandDcodes" pic={msk}/>
        <NewButton title="Anesthesia and Sedation" color="anesthesia" link="/Sedation" pic={cloud}/>
        <NewButton title="Diagnostic Codes" color="bg-yellow-200" link="/Diagnostic" pic={numbers}/>
      </div>
      
        */}

      <Footer />
    </div>
  );
}

export default App;

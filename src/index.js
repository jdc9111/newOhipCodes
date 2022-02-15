import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Infection from "./routes/Infection";
import Cardio from "./routes/Cardio";
import Resp from "./routes/Resp";
import Derm from "./routes/Derm";
import GI from "./routes/GI";
import Eye from "./routes/Eye";
import Ent from "./routes/Ent";
import Teeth from "./routes/Teeth";
import Neuro from "./routes/Neuro";
import GU from "./routes/GU";
import Gyne from "./routes/Gyne";
import Psych from "./routes/Psych";
import Endo from "./routes/Endo";
import Msk from "./routes/Msk";
import Nyd from "./routes/Nyd";
import Assessment from "./routes/Assessment";
import App from "./App.js";
import Diagnostic from "./routes/Diagnostic";
import Procedures from "./routes/Procedures";
import Laceration from "./routes/Laceration";
import Breast from "./routes/Breast";
import FandDcodes from "./routes/FandDcodes";
import Sedation from "./routes/Sedation";
import Asa from "./routes/Asacodes";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Cardio" element={<Cardio />} />
        <Route path="Infection" element={<Infection />} />
        <Route path="Resp" element={<Resp />} />
        <Route path="Derm" element={<Derm />} />
        <Route path="GI" element={<GI />} />
        <Route path="Eye" element={<Eye />} />
        <Route path="Ent" element={<Ent />} />
        <Route path="Teeth" element={<Teeth />} />
        <Route path="Neuro" element={<Neuro />} />
        <Route path="GU" element={<GU />} />
        <Route path="Gyne" element={<Gyne />} />
        <Route path="Psych" element={<Psych />} />
        <Route path="Endo" element={<Endo />} />
        <Route path="Msk" element={<Msk />} />
        <Route path="Nyd" element={<Nyd />} />
        <Route path="Diagnostic" element={<Diagnostic />} />
        <Route path="Assessment" element={<Assessment />} />
        <Route path="Laceration" element={<Laceration />} />
        <Route path="Procedures" element={<Procedures />} />
        <Route path="Breast" element={<Breast />} />
        <Route path="FandDcodes" element={<FandDcodes/>}/>
        <Route path="Sedation" element={<Sedation/>}/>
        <Route path="Asa" element={<Asa />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




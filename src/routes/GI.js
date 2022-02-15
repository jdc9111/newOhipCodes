import React from "react";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";
import Title from "../Components/Title";

const GI = () => {
  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <Navbar back="/Diagnostic"/>
      <Title title="GI" />
      <Table type="gi" />
    </div>
  );
};

export default GI;

import React from "react";
import Table from "../Components/Table";
import Navbar from "../Components/Navbar";
import Title from "../Components/Title";

const Resp = () => {
  return (
    <div className="pl-1 pr-1 mb-5 pb-5 font-sans mx-auto md:w-2/3 xl:w-1/2">
      <Navbar back="/Diagnostic"/>
      <Title title="Respirology" />
      <Table type="resp" />
    </div>
  );
};

export default Resp;

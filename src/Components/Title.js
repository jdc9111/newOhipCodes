import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1 className="mt-5 mb-5 font-bold text-4xl text-center text-info">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;

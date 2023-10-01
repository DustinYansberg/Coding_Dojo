import React from "react";

const Box = ({ boxColor }) => {
  return (
    <div
      style={{
        background: boxColor,
        height: "100px",
        width: "100px",
        margin: "3px",
      }}
    ></div>
  );
};

export default Box;

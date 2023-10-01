import React from "react";

const Content = ({ currContent }) => {
  return (
    <div
      style={{
        outline: "solid black 1px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: "20%",
        marginRight: "20%",
        marginBottom: "5%",
        marginTop: "5%",
        height: "100px",
      }}
    >
      {currContent}
    </div>
  );
};

export default Content;

import React from "react";

const Tabs = ({ tab, idx, content, updateActiveTab }) => {


  const passTheContent = (e) => {
    e.preventDefault();
    // changes which tab is visually active
    updateActiveTab(idx)
    // passes content to parent so parent can update the content component
    content(idx);
  };

  return (
    <div style={{outline:"solid black 1px"}}>
      <div
        onClick={
          (e) => passTheContent(e)
          }
        style={{
          outline: "1px solid black",
          background: tab.isActive ? "black" : "white",
          color: tab.isActive ? "white" : "black",
          padding: "2px 10px 2px 10px",
        }}
      >
        {tab.label}
      </div>
    </div>
  );
};

export default Tabs;

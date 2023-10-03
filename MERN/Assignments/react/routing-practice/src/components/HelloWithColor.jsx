import React from "react";
import { useParams } from "react-router-dom";

const HelloWithColor = () => {
  const { word, fontColor, backgroundColor } = useParams();

  return (
    <div style={{ background: backgroundColor, color: fontColor }}>{word}</div>
  );
};

export default HelloWithColor;

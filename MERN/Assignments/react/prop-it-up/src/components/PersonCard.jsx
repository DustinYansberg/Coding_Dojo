import React from "react";

const PersonCard = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </>
  );
};

export default PersonCard;

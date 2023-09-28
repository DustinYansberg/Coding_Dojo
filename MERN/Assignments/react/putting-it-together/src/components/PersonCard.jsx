import React, { useState } from "react";
import StyledButton from "./Styled";

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age); // set state of age. State tells react to watch for changes in this variable
  const handleClick = () => {
    setAge(age + 1); // setAge will increment state by 1 whenever handleClick is called
  };
  return (
    <>
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <StyledButton onClick={handleClick} bgColor="pink">
        {" "}
        {/* Increase age by 1 */}
        Birthday Button for {props.firstName} {props.lastName}
      </StyledButton>
    </>
  );
};

export default PersonCard;

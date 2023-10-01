import { useState } from "react";

const Form = ({ createBox }) => {

  // I want the default color to be random, so lets set that up first
  const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // It is hexadecimal, so I need the string to represent the number as base 16
  const [color, setColor] = useState(randColor);

  const updateColor = (newColor) => {
    // when a new color is picked, reset the color
    return setColor(newColor);
  };

  const passColor = (e) => {
    e.preventDefault();
    createBox(e.target.children[1].value);
    setColor(randColor);
  };

  return (
    <form onSubmit={passColor}>
      <label htmlFor="color">Choose a color: </label>
      <input
        id="color"
        type="color"
        value={color}
        onChange={(e) => updateColor(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;

import { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [boxes, setBoxes] = useState(["red", "green", "blue"]);

  const createBox = (color) => {
    setBoxes([...boxes, color]);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          alignItems: "center",
          margin: "auto",
          padding: "10px",
          overflowWrap: "anywhere",
        }}
      >
        <Form createBox={createBox} />
      </div>

      <div
        style={{
          display: "flex",
          // width: "400px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "10px",
          overflowWrap: "anywhere",
        }}
      >
        {boxes.map((boxColor, idx) => {
          return <Box key={idx} boxColor={boxColor} />;
        })}
      </div>
    </div>
  );
}

export default App;

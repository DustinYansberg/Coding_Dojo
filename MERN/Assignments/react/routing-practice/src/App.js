import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Num from "./components/Num";

import HelloWithColor from "./components/HelloWithColor";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* HOME ROUTE */}
        <Route path="/home" element="Welcome" />
        {/* NUMBER 4 ROUTE HELLO ROUTE */}
        <Route path="/:num" element={<Num />} />
        {/* */}
        {/*HELLO/BLUE/RED, ETC */}
        <Route
          path="/:word/:fontColor/:backgroundColor"
          element={<HelloWithColor />}
        />
      </Routes>
    </div>
  );
}

export default App;

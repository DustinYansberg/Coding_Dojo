import { Route, Routes } from "react-router-dom";

import MainView from "./Views/MainView";

import "./App.css";
import { Paper } from "@mui/material";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </>
  );
}

export default App;

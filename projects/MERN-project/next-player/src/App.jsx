import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import MainView from "./Views/MainView";

import "./App.css";
// import { useState } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainView />} />
      </Routes>
    </>
  );
}

export default App;

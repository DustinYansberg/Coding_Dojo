import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import NewPlayer from "./views/NewPlayer";
import EditPlayer from "./views/EditPlayer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/players" />} />
        <Route path="/players" element={<Main />} />
        <Route path="/players/new" element={<NewPlayer />} />
        <Route path="/players/:id/edit" element={<EditPlayer />} />
      </Routes>
    </div>
  );
}

export default App;

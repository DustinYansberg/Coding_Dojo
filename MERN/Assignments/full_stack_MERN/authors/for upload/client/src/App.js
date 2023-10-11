import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import NewAuthor from "./views/NewAuthor";
import EditAuthor from "./views/EditAuthor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/authors" />} />
        <Route path="/authors" element={<Main />} />
        <Route path="/authors/new" element={<NewAuthor />} />
        <Route path="/authors/:id/edit" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Person from "./components/Person";
import Place from "./components/Place";
import Form from "./components/Form";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form />
              <hr />
              ^^^Fill out the form!^^^
            </>
          }
        />
        <Route
          path="/planets/:id"
          element={
            <>
              <Form /> <hr />
              <Place />
            </>
          }
        />

        <Route
          path="/people/:id"
          element={
            <>
              <Form /> <hr />
              <Person />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Form /> <hr />
              <Error />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

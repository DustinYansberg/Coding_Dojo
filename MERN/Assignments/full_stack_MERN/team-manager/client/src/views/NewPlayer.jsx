import React from "react";
import PlayerForm from "../components/PlayerForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPlayer = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const saveNewPlayer = (newName, newPosition) => {
    const reqObj = {
      name: newName,
      position: newPosition,
      gameStatuses: ["undecided", "undecided", "undecided"],
    };
    console.log(reqObj);
    axios
      .post("http://localhost:8000/api/players", reqObj)
      .then((res) => {
        console.log(res.data);
        navigate("/players");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };
  return (
    <>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayerForm
          formTitle="Add a New Player:"
          initialPlayerName=""
          initialPosition=""
          successCallback={saveNewPlayer}
        />
      </div>
      {errors[0]}
    </>
  );
};

export default NewPlayer;

import React from "react";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAuthor = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const saveNewAuthor = (newName) => {
    console.log(newName);
    axios
      .post("http://localhost:8000/api/authors", { name: newName })
      .then((res) => {
        console.log(res.data);
        navigate("/authors");
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
        <AuthorForm
          formTitle="Add a New Author:"
          initialAuthorName=""
          successCallback={saveNewAuthor}
        />
      </div>
      {errors[0]}
    </>
  );
};

export default NewAuthor;

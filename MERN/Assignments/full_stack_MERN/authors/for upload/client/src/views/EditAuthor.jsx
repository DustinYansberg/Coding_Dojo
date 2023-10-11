import { useEffect, useState } from "react";
import AuthorForm from "../components/AuthorForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
        setLoaded(true);
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
  }, []);

  const updateAuthor = (newName) => {
    console.log(newName);
    axios
      .patch(`http://localhost:8000/api/authors/${id}`, { name: newName })
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
      {loaded && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AuthorForm
            initialAuthorName={author.name}
            formTitle="Edit Author"
            successCallback={updateAuthor}
          />
        </div>
      )}
      {errors[0]}
    </>
  );
};

export default EditAuthor;

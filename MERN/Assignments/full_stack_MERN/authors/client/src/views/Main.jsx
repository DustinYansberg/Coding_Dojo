import AuthorList from "../components/AuthorList";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        //* sort the res.data alphabetically by author name
        res.data.sort((a, b) => {
          //compare each object to one another, one at a time
          // convert name to lowercase
          let aName = a.name.toLowerCase();
          let bName = b.name.toLowerCase();
          // return the sorted value of the name
          return aName < bName // if a name is alphabetically lower than b name, return -1 to sort a after b
            ? -1
            : aName > bName // if a name is alphabetically higher than b name, return 1 to sort b after a
            ? 1
            : 0; // if they have the same value, return 0 to keep original sort value
        });
        //set authors to the now sorted array
        setAuthors(res.data);
      }, setLoaded(true))
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        const filteredAuthorList = authors.filter(
          (author) => author._id !== id
        );
        setAuthors(filteredAuthorList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <br />
      {loaded && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/authors/new")}
          >
            Add Author
          </Button>
          <h1>All Authors:</h1>
          <AuthorList authors={authors} removeFromDom={removeFromDom} />
        </div>
      )}
    </>
  );
};

export default Main;

import { useEffect, useState } from "react";
import PlayerForm from "../components/PlayerForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8000/api/players/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlayer(res.data);
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

  const updatePlayer = (newName) => {
    console.log(newName);
    axios
      .patch(`http://localhost:8000/api/players/${id}`, { name: newName })
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
      {loaded && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlayerForm
            initialPlayerName={player.name}
            formTitle="Edit Player"
            successCallback={updatePlayer}
          />
        </div>
      )}
      {errors[0]}
    </>
  );
};

export default EditPlayer;

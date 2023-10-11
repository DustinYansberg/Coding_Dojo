import PlayerList from "../components/PlayerList";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data), setLoaded(true))
      .catch((err) => console.log(err));
  }, []);

  /**
   * ? Take in an id, and use this id to delete the author associated with it form the server.
   * ? Afterwards, remove the now deleted Author form the dom
   * @param {Number} id
   * @returns {undefined}
   */
  const removeFromDom = (id) => {
    axios
      .delete(`http://localhost:8000/api/players/${id}`)
      .then((res) => {
        const filteredPlayerList = players.filter(
          (player) => player._id !== id
        );
        setPlayers(filteredPlayerList);
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
            onClick={() => navigate("/players/new")}
          >
            Add Player
          </Button>
          <h1>All Players:</h1>
          <PlayerList players={players} removeFromDom={removeFromDom} />
        </div>
      )}
    </>
  );
};

export default Main;

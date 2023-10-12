import { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import CancelButton from "./buttons/CancelButton";

const PlayerForm = (props) => {
  const { initialPlayerName, initialPosition, formTitle, successCallback } =
    props;
  const [name, setName] = useState(initialPlayerName);
  const [position, setPosition] = useState(initialPosition);

  const nameChange = (newName) => {
    setName(newName);
  };
  const positionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    successCallback(name, position);
  };

  //* Styles for Material UI
  const styles = {
    paper: {
      width: "20rem",
      padding: "1rem",
    },
    input: {
      marginBottom: "1rem",
    },
    button: {
      width: "100%",
    },
  };
  return (
    <Paper elevation={3} style={styles.paper}>
      <h2>{formTitle}</h2>
      <form>
        <FormControl variant="outlined" style={styles.input}>
          <InputLabel>Player Name</InputLabel>
          <OutlinedInput
            value={name}
            type="text"
            onChange={(e) => nameChange(e.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined" style={styles.input}>
          <InputLabel>Position</InputLabel>
          <OutlinedInput
            value={position}
            type="text"
            onChange={(e) => positionChange(e.target.value)}
          />
        </FormControl>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20%",
          }}
        >
          <CancelButton />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSubmitHandler}
          >
            Save
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default PlayerForm;

import { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import CancelButton from "./buttons/CancelButton";

const AuthorForm = (props) => {
  const { initialAuthorName, formTitle, successCallback } = props;
  const [name, setName] = useState(initialAuthorName);

  const nameChange = (newName) => {
    setName(newName);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    successCallback(name);
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
          <InputLabel>Author Name</InputLabel>
          <OutlinedInput
            value={name}
            type="text"
            onChange={(e) => nameChange(e.target.value)}
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

export default AuthorForm;

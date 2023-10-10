import React from "react";
import "./App.css";
import {
  Paper,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";

function App() {
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
    <div className="App">
      <Paper elevation={3} style={styles.paper}>
        <h2>Login Form</h2>
        <form>
          <FormControl variant="outlined" style={styles.input}>
            <InputLabel>Username</InputLabel>
            <OutlinedInput type="text" />
          </FormControl>
          <FormControl variant="outlined" style={styles.input}>
            <InputLabel>E-mail</InputLabel>
            <OutlinedInput type="email" />
          </FormControl>
          <FormControl variant="outlined" style={styles.input}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput type="password" />
          </FormControl>
          <FormControl variant="outlined" style={styles.input}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput type="password" />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;

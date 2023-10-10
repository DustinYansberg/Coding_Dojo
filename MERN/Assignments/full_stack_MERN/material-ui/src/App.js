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
      {/* elevation makes the section appear raised above the page by giving it a drop shadow*/}
      {/* <Paper elevation={10}>
        <p>This is written on a "Paper" element</p>
        <p>
          This paper element has a property called "elevation" which allows it
          to appear raised about the rest of the page.
        </p>
        <p>This is achieved by adding a drop shadow below the Paper element.</p>
        <p>This paper's elevation is set to 10</p>
      </Paper>
      <Paper elevation={3}>
        <p>this paper's elevation is set to 3</p>
      </Paper> */}
      {/* CARD Below */}
      {/* <Card>
        <CardContent>
          <h1>This is content within my card</h1>
        </CardContent>
      </Card> */}
      {/* BUTTON */}
      {/* <Button>Click Me I am a default button</Button> */}
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

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

import GameSelector from "./GameSelector";

const Navbar = () => {
  return (
    <Paper elevation={10}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <GameSelector />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              This Player is inviting you to Tic-Tac-Toe
              <Button color="success" variant="solid">
                Accept
              </Button>
              <Button color="danger" variant="solid">
                Reject
              </Button>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
};

export default Navbar;

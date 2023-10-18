import React from "react";
import { OutlinedInput, Paper } from "@mui/material";
import VideoStream from "../Components/VideoStream";
import Chat from "../Components/Chat";
import Box from "@mui/material/Box";

const MainView = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexGrow: 1,
          mt: "20px",
          gap: "10px",
          maxHeight: "500px",
        }}
      >
        <VideoStream />
        <VideoStream />
        <Box sx={{ flexGrow: 1, maxWidth: "30%" }}>
          <Chat />
        </Box>
      </Paper>
    </>
  );
};

export default MainView;

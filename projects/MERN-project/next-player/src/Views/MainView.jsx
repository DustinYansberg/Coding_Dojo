import React from "react";
import { Container } from "@mui/material";
import GameSelector from "../Components/GameSelector";

const MainView = () => {
  return (
    <>
      <GameSelector />
      <Container maxWidth="xl" sx={{ border: 1 }}>
        MainView
      </Container>
    </>
  );
};

export default MainView;

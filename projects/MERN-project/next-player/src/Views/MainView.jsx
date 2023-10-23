import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import VideoStream from "../Components/VideoStream";
import Chat from "../Components/Chat";
import Box from "@mui/material/Box";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import TestingVideo from "../Components/TestingVideo";

// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/compat/analytics";

// async function makeDb() {
//   const firebaseConfig = {
//     apiKey: "AIzaSyAVCZ8e03WIrIl-7QqOyKHmQgan3nFv6_M",
//     authDomain: "nextplayer-31fa4.firebaseapp.com",
//     projectId: "nextplayer-31fa4",
//     storageBucket: "nextplayer-31fa4.appspot.com",
//     messagingSenderId: "285690304694",
//     appId: "1:285690304694:web:9eaaea30ef85357ad4ae17",
//     measurementId: "G-DL1NCN047T",
//   };

//   const db = firebase.initializeApp(firebaseConfig).firestore();
//   console.log(db);
//   return db;
// }

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
        <TestingVideo />

        <Box sx={{ flexGrow: 1, maxWidth: "30%" }}>
          <Chat />
        </Box>
      </Paper>
    </>
  );
};

export default MainView;

import React, { useEffect, useState } from "react";

//material UI stuff
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { Button } from "@mui/material";
import Typography from "@mui/joy/Typography";

//firebase stuff
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const VideoStream = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAVCZ8e03WIrIl-7QqOyKHmQgan3nFv6_M",
    authDomain: "nextplayer-31fa4.firebaseapp.com",
    projectId: "nextplayer-31fa4",
    storageBucket: "nextplayer-31fa4.appspot.com",
    messagingSenderId: "285690304694",
    appId: "1:285690304694:web:9eaaea30ef85357ad4ae17",
    measurementId: "G-DL1NCN047T",
  };

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  const db = firebase.initializeApp(firebaseConfig).firestore();

  const [peerConnection, setPeerConnection] = useState(null);
  const [localStream, setLocalStream] = useState(new MediaStream());
  const [remoteStream, setRemoteStream] = useState(new MediaStream());
  const [roomDialog, setRoomDialog] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [playing, setPlaying] = useState(false);

  const height = 400;
  const width = 400;

  useEffect(() => {
    startVideo();
  }, []);

  const startVideo = async () => {
    setPlaying(true);
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    setLocalStream(stream);

    // document.getElementsByClassName("videoFeed")[0].srcObject = localStream;

    // setRemoteStream(new MediaStream());
    // document.getElementsByClassName("videoFeed")[1].srcObject = remoteStream;
  };

  const stopVideo = () => {
    setPlaying(false);
    const video = document.getElementsByClassName("videoFeed")[0];
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    video.srcObject = null;
  };

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        p: 0,
        m: 0,
        flexGrow: 1,
      }}
    >
      <Card
        component="li"
        sx={{
          minWidth: 300,
          flexGrow: 1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          height={height}
          width={width}
          className="videoFeed"
          src={localStream}
        ></video>
        {!playing ? (
          <Button onClick={startVideo}>Start</Button>
        ) : (
          <Button onClick={stopVideo}>Stop</Button>
        )}
        <Button variant="solid" sx={{ backgroundColor: "red" }}>
          Next Player
        </Button>
      </Card>
    </Box>
  );
};

export default VideoStream;

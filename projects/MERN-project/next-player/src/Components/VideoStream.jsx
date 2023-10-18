import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { Button } from "@mui/material";
import Typography from "@mui/joy/Typography";

const VideoStream = () => {
  //   const servers = {
  //     iceServers: [
  //       {
  //         urls: [
  //           "stun:stun1.l.google.com:19302",
  //           "stun:stun2.l.google.com:19302",
  //         ],
  //       },
  //     ],
  //     iceCandidatePoolSize: 10,
  //   };

  //   let pc = new RTCPeerConnection(servers);
  //   let localStream = navigator.mediaDevices.getUserMedia({
  //     video: true,
  //     audio: true,
  //   });

  const [playing, setPlaying] = useState(false);
  const height = 300;
  const width = 300;

  const startVideo = async () => {
    setPlaying(true);

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    let video = document.getElementsByClassName("videoFeed")[0];
    video.srcObject = stream;
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

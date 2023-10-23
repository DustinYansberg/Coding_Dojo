import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";

import { db, servers } from "../firebase";
import {
  doc,
  updateDoc,
  addDoc,
  getDocs,
  collection,
  getDoc,
  setDoc,
} from "firebase/firestore";
import "firebase/compat/firestore";

const TestingVideo = () => {
  const [playing, setPlaying] = useState(false);
  const [collectionRef, setCollectionRef] = useState(null);
  const [roomRef, setRoomRef] = useState(null);
  const [roomDoc, setRoomDoc] = useState(null);
  const [userCount, setUserCount] = useState(1);
  const [peerConnection, setPeerConnection] = useState(null);

  const [localStream, setLocalStream] = useState();

  const height = 400;
  const width = 400;

  //   let peerConnection = null;
  let remoteStream = null;

  const getRooms = async () => {
    const newCollectionRef = collection(db, "rooms");
    setCollectionRef(newCollectionRef);
    const querySnapshot = await getDocs(newCollectionRef);
    let newRoomRef = null;

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const docUserCount = data.userCount;
      if (docUserCount === 1) {
        console.log("Found a room with 1 user!");
        newRoomRef = doc.ref;
        setUserCount(userCount + 1);
        break;
      }
    }
    // if no qualified, create a new one!
    if (!newRoomRef) {
      newRoomRef = await addDoc(newCollectionRef, { userCount: userCount });
    }

    setRoomRef(newRoomRef);
  };

  useEffect(() => {
    const initialize = async () => {
      await openUserMedia();
      getRooms();
    };
    initialize();
  }, []);

  useEffect(() => {
    if (roomRef) {
      fillRoom(roomRef);
    }
  }, [roomRef]);

  const fillRoom = async (docRef) => {
    await updateDoc(docRef, { userCount: userCount });
    userCount === 1 ? createOffer() : answerOffer();
  };

  const openUserMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    document.getElementsByClassName("videoFeed")[0].srcObject = stream;
    setLocalStream(stream); // Update the state variable with the stream
    remoteStream = new MediaStream();
    document.getElementsByClassName("videoFeed")[1].srcObject = remoteStream;

    console.log(
      "Stream:",
      document.getElementsByClassName("videoFeed")[0].srcObject
    );
  };

  const createPeerConnection = () => {
    let pc = new RTCPeerConnection(servers);

    pc.addEventListener("icegatheringstatechange", () => {
      console.log(`ICE gathering state changed: ${pc.iceGatheringState}`);
    });

    pc.addEventListener("connectionstatechange", () => {
      console.log(`Connection state change: ${pc.connectionState}`);
    });

    pc.addEventListener("signalingstatechange", () => {
      console.log(`Signaling state change: ${pc.signalingState}`);
    });

    pc.addEventListener("iceconnectionstatechange ", () => {
      console.log(`ICE connection state change: ${pc.iceConnectionState}`);
    });

    return pc;
  };

  const createOffer = async () => {
    console.log(
      "OFFER ROUTE Create PeerConnection with configuration: ",
      servers
    );

    let pc = createPeerConnection();

    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    const callerCandidatesCollectionRef = collection(
      roomRef,
      "callerCandidates"
    );

    pc.addEventListener("icecandidate", (event) => {
      console.log(event);
      if (!event.candidate) {
        console.log("Got final candidate!");
        return;
      }
      console.log("Got candidate: ", event.candidate);
      addDoc(callerCandidatesCollectionRef, event.candidate.toJSON());
    });

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    console.log("Created offer:", offer);

    const roomWithOffer = {
      offer: {
        type: offer.type,
        sdp: offer.sdp,
      },
    };

    // await roomRef.set(roomWithOffer);
    await setDoc(roomRef, roomWithOffer);

    pc.addEventListener("track", (event) => {
      console.log("Got remote track:", event.streams[0]);
      event.streams[0].getTracks().forEach((track) => {
        console.log("Add a track to the remoteStream:", track);
        remoteStream.addTrack(track);
      });
    });

    let roomSnapshot = await getDoc(roomRef);

    let data = roomSnapshot.data();
    if (!pc.currentRemoteDescription && data && data.answer) {
      console.log("Got remote description: ", data.answer);
      const rtcSessionDescription = new RTCSessionDescription(data.answer);
      await pc.setRemoteDescription(rtcSessionDescription);
    }

    //! roomref.collection is not a function
    const calleeCandidatesCollectionRef = collection(
      roomRef,
      "calleeCandidates"
    );
    roomSnapshot = await getDoc(roomRef);
    data = await roomSnapshot.data();
    console.log(data);

    roomRef.collection("calleeCandidates").onSnapshot((snapshot) => {
      roomSnapshot.docChanges().forEach(async (change) => {
        if (change.type === "added") {
          let data = change.doc.data();
          console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
          await pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });

    setPeerConnection(pc);
  };

  const answerOffer = async () => {
    const answerRoomRef = doc(db, "rooms", roomRef.id);
    const roomSnapshot = await getDoc(answerRoomRef);
    console.log("Got room:", roomSnapshot.exists);

    if (roomSnapshot.exists) {
      console.log("Create PeerConnection with configuration: ", servers);
      let pc = new RTCPeerConnection(servers);
      registerPeerConnectionListeners();
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });

      // Code for collecting ICE candidates below
      const calleeCandidatesCollection = roomRef.collection("calleeCandidates");
      pc.addEventListener("icecandidate", (event) => {
        if (!event.candidate) {
          console.log("Got final candidate!");
          return;
        }
        console.log("Got candidate: ", event.candidate);
        calleeCandidatesCollection.add(event.candidate.toJSON());
      });
      // Code for collecting ICE candidates above
    }

    setPeerConnection(pc);
  };

  return (
    <>
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
          {!playing ? <Button>Start</Button> : <Button>Stop</Button>}
          <Button variant="solid" sx={{ backgroundColor: "red" }}>
            Next Player
          </Button>
          {roomRef && `${roomRef.id}`}
        </Card>
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
          {!playing ? <Button>Start</Button> : <Button>Stop</Button>}
          <Button variant="solid" sx={{ backgroundColor: "red" }}>
            Next Player
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default TestingVideo;

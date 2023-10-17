// import "./style.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-xTyZ6kwpEbWVE7BApJLA9I9SEdjt2h0",
  authDomain: "videotest-d2d5c.firebaseapp.com",
  projectId: "videotest-d2d5c",
  storageBucket: "videotest-d2d5c.appspot.com",
  messagingSenderId: "827001807969",
  appId: "1:827001807969:web:ec294f2445afdd19407620",
  measurementId: "G-ERYE741VMB",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

//? STUN SERVERS
const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global state
let pc = new RTCPeerConnection(servers);

// video streams of the users null before buttons are pressed
let localStream = null;
let remoteStream = null;

// button elements
const webcamButton = document.getElementById("webcamButton");
const webcamVideo = document.getElementById("webcamVideo");
const callButton = document.getElementById("callButton");
const callInput = document.getElementById("callInput");
const answerButton = document.getElementById("answerButton");
const remoteVideo = document.getElementById("remoteVideo");
const hangupButton = document.getElementById("hangupButton");

//! 1. setup media sources
//* START WEBCAM BUTTON
// When the webcam button is pushed
webcamButton.onclick = async () => {
  console.log("Webcam active!");

  // ask user for permission to access their camera and microphone, assign the stream to localStream
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  // Push tracks from local stream to peer connection
  localStream.getTracks().forEach((track) => {
    console.log(track);
    pc.addTrack(track, localStream);
  });

  // pull tracks from remote stream, add to video stream
  pc.ontrack = (e) => {
    e.streams[0].getTracks().forEach((track) => {
      // console.log(track);
      remoteStream.addTrack(track);
    });
  };

  // UPDATE VIDEO ELEMENT IN DOM
  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;
};

//! 2. create an offer
//* CALL BUTTON
callButton.onclick = async () => {
  // Reference Firestore collection
  const callDoc = firestore.collection("calls").doc();
  const offerCandidates = callDoc.collection("offerCandidates");
  const answerCandidates = callDoc.collection("answerCandidates");

  callInput.value = callDoc.id;

  // Get candidates for caller, save to db
  pc.onicecandidate = (e) => {
    e.candidate && offerCandidates.add(e.candidate.toJSON());
  };

  // create "offer"
  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };

  await callDoc.set({ offer });
  // Listen for remote answer
  callDoc.onSnapshot((snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      //? Fires when call is answered
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  // When answered, add candidate to peer connection
  answerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });
};

//! 3. Answer the call with the unique ID
answerButton.onClick = async () => {
  const callId = callInput.value;
  const callDoc = fireStore.collection("calls").doc(callId);
  const answerCandidates = callDoc.collection("answerCandidates");

  pc.onicecandidate = (e) => {
    e.candidate && answerCandidates.add(e.candidate.toJSON());
  };

  const callData = (await callDoc.get()).data();

  const offerDescription = callData.offer;
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await callDoc.update({ answer });

  offerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === "added") {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
};

hangupButton.onClick = async () => {
  console.log("hangup button pressed");
};

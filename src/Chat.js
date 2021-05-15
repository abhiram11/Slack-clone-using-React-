import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useEffect } from "react";
import { useState } from "react";
import db from "./firebase";

function Chat() {
  const { roomId } = useParams();

  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState(null);

  //runs when component loads or changes
  useEffect(() => {
    if (roomId) {
      //the roomId gets populated due to the CLICK on the channel at the SIDEBAR
      db.collection("channels")
        .doc(roomId)
        .onSnapshot((snapshot) => setChannelDetails(snapshot.data()));
    }

    db.collection("channels")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setChannelMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log("channel details:", channelDetails);

  console.log("Channel Messages >>>>>", channelMessages);

  return (
    <div className="chat">
      {/* <h2> You are in the {roomId} room</h2> */}
      {/* CHAT HEADER */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{channelDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;

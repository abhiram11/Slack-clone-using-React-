import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useEffect } from "react";
import { useState } from "react";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();

  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState([]);

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
  console.log("channel Id:", roomId);
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
      {/* chat header is over above */}
      <div className="chat__messages">
        {/* <Message with some props.... /> */}
        {channelMessages.map(({ message, timestamp, username, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            username={username}
            userImage={userimage}
          />
        ))}
      </div>
      <ChatInput channelName={channelDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;

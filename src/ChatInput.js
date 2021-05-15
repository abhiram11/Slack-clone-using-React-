// import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./ChatInput.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  console.log("Ch name and Id in chatinput.js:", channelName, channelId);
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue(); // cuz we want to post on behalf of the user

  const sendMessage = (e) => {
    e.preventDefault(); // so it doesnt refresh the page

    if (channelId) {
      //going inside the messages collection for that channel
      db.collection("channels").doc(channelId).collection(channelName).add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //timestamp of the server, irrespective of your zone
        username: user?.displayName,
        userImage: user?.photoURL,
      });
    }
  };

  //   console.log({ channelName });
  return (
    <div className="chatInput">
      <form>
        <input placeholder={`Message #${channelName?.lowercase}`} />
        <button
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="submit"
          onClick={sendMessage}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;

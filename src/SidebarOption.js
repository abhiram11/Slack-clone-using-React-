import React from "react";
import { useHistory } from "react-router-dom";
import db from "./firebase";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, id, addChannelOption, totalChannels }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    // console.log("Total Channels:", totalChannels);
    // console.log("Type of channels:", typeof totalChannels);

    if (totalChannels >= 5) {
      alert(
        "Maximum of 5 channels can be added. Contact Abhiram to delete a channel first."
      );
    } else {
      const channelName = prompt("Please enter the channel Name");

      if (channelName) {
        db.collection("channels").add({
          name: channelName,
        });
      }
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;

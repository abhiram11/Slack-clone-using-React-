import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
        {/* <h1>left side of header</h1> */}
        {/* time icon, avatar as well? */}
      </div>
      <div className="header__search">
        {/* <h1>center of header</h1> */}
        {/* search, input */}
        <SearchIcon />
        <input placeholder="Search in Abhi's Slack Dome" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        {/* <h1>right side of header</h1> */}
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth, provider } from "./firebase";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const logoutUser = () => (
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    }),
    auth.signOut()
  );

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
        <input placeholder="Search Abhi's Slack" title="Coming Soon!" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        <button onClick={logoutUser}>Logout</button>
        {/* <h1>right side of header</h1> */}
      </div>
    </div>
  );
}

export default Header;

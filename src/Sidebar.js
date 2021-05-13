import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* keeps profile and important data */}
        <div className="sidebar__info">
          <h2>Abhiram's Slack!</h2>
          <h3>
            <FiberManualRecordIcon />
            Abhiram Satpute
          </h3>
        </div>
        <CreateIcon />
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Vorbulla</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1371801240057880581/amNh7BZK_400x400.jpg"
            alt="The King"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
